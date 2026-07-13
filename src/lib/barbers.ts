import { cacheLife } from "next/cache";
import type { Image } from "sanity";
import { fallbackBarbers, type Barber } from "@/data/site";
import { sanityClient, getSanityImageUrl } from "@/lib/sanity/client";
import { getBarbersRevalidateSeconds, isSanityConfigured } from "@/lib/sanity/env";

type SanityBarber = {
  _id: string;
  name?: string;
  role?: string;
  bio?: string;
  specialties?: string[];
  image?: Image | null;
  displayOrder?: number | null;
};

const barbersQuery = `
  *[
    _type == "barber" &&
    coalesce(isPublished, true) == true
  ] | order(coalesce(displayOrder, 9999) asc, _createdAt asc) {
    _id,
    name,
    role,
    bio,
    specialties,
    image,
    displayOrder
  }
`;

function mapSanityBarber(barber: SanityBarber): Barber | null {
  const name = barber.name?.trim();
  const role = barber.role?.trim();
  const bio = barber.bio?.trim();

  if (!name || !role || !bio) {
    return null;
  }

  return {
    name,
    role,
    bio,
    specialties: Array.isArray(barber.specialties)
      ? barber.specialties.map((specialty) => specialty.trim()).filter(Boolean)
      : [],
    image: getSanityImageUrl(barber.image),
  };
}

function shouldUseFallback(error: unknown) {
  if (process.env.NODE_ENV !== "production") {
    return true;
  }

  const message = error instanceof Error ? error.message.toLowerCase() : "";

  return (
    message.includes("project") ||
    message.includes("dataset") ||
    message.includes("token") ||
    message.includes("unauthorized") ||
    message.includes("permission")
  );
}

export async function getBarbers() {
  "use cache";

  const revalidate = getBarbersRevalidateSeconds();
  cacheLife({
    revalidate,
    expire: Math.max(revalidate * 12, revalidate + 1),
  });

  if (!isSanityConfigured() || !sanityClient) {
    return fallbackBarbers;
  }

  try {
    const cmsBarbers = await sanityClient.fetch<SanityBarber[]>(barbersQuery);
    return cmsBarbers.map(mapSanityBarber).filter((barber): barber is Barber => barber !== null);
  } catch (error) {
    if (shouldUseFallback(error)) {
      console.warn("Falling back to local barber data because Sanity content is unavailable.", error);
      return fallbackBarbers;
    }

    throw error;
  }
}
