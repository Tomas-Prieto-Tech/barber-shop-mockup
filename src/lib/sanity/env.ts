const defaultApiVersion = "2025-01-01";
const defaultBarbersRevalidateSeconds = 300;

export function getSanityProjectId() {
  return process.env.SANITY_STUDIO_PROJECT_ID?.trim() ?? "";
}

export function getSanityDataset() {
  return process.env.SANITY_STUDIO_DATASET?.trim() ?? "";
}

export function getSanityApiVersion() {
  return process.env.SANITY_API_VERSION?.trim() || defaultApiVersion;
}

export function getSanityReadToken() {
  return process.env.SANITY_READ_TOKEN?.trim() || undefined;
}

export function getSanityStudioTitle() {
  return process.env.SANITY_STUDIO_PROJECT_TITLE?.trim() || "The Standard Barbershop";
}

export function getBarbersRevalidateSeconds() {
  const rawValue = Number(process.env.SANITY_BARBERS_REVALIDATE_SECONDS);

  if (!Number.isFinite(rawValue) || rawValue <= 0) {
    return defaultBarbersRevalidateSeconds;
  }

  return Math.floor(rawValue);
}

export function isSanityConfigured() {
  return Boolean(getSanityProjectId() && getSanityDataset());
}
