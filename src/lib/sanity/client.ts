import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";
import {
  getSanityApiVersion,
  getSanityDataset,
  getSanityProjectId,
  getSanityReadToken,
  isSanityConfigured,
} from "@/lib/sanity/env";

const projectId = getSanityProjectId();
const dataset = getSanityDataset();

export const sanityClient = isSanityConfigured()
  ? createClient({
      projectId,
      dataset,
      apiVersion: getSanityApiVersion(),
      useCdn: true,
      perspective: "published",
      token: getSanityReadToken(),
    })
  : null;

const imageBuilder = sanityClient ? imageUrlBuilder(sanityClient) : null;

export function getSanityImageUrl(source: Image | null | undefined) {
  if (!imageBuilder || !source?.asset) {
    return null;
  }

  return imageBuilder.image(source).width(960).height(1100).fit("crop").auto("format").url();
}
