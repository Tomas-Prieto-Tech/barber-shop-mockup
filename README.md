# The Standard Barbershop

## Local Setup

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local`.
3. Fill in the Sanity project vars:
   `SANITY_STUDIO_PROJECT_ID` and `SANITY_STUDIO_DATASET`.
4. Add `SANITY_READ_TOKEN` only if your dataset is private.
5. Run `npm run dev` and open `http://localhost:3000`.

If the Sanity variables are missing locally, the site falls back to the seeded barber data in [src/data/site.ts](/Users/tomasprieto/Desktop/barber-shop-mockup/src/data/site.ts).

## Sanity CMS

The homepage barber grid now reads from Sanity and revalidates on the interval set by `SANITY_BARBERS_REVALIDATE_SECONDS` (default `300` seconds).

The Sanity schema lives in:

- [sanity.config.ts](/Users/tomasprieto/Desktop/barber-shop-mockup/sanity.config.ts)
- [sanity/schemaTypes/barber.ts](/Users/tomasprieto/Desktop/barber-shop-mockup/sanity/schemaTypes/barber.ts)

Useful commands:

- `npm run sanity:dev` starts the Sanity Studio locally.
- `npm run sanity:seed-barbers` uploads the current three barber images and creates or replaces the matching documents.

The Studio reads only:

- `SANITY_STUDIO_PROJECT_ID`
- `SANITY_STUDIO_DATASET`
- `SANITY_STUDIO_PROJECT_TITLE`

The website reads:

- `SANITY_STUDIO_PROJECT_ID`
- `SANITY_STUDIO_DATASET`
- `SANITY_API_VERSION`
- `SANITY_BARBERS_REVALIDATE_SECONDS`
- `SANITY_READ_TOKEN` when the dataset is private

The seed command requires:

- `SANITY_STUDIO_PROJECT_ID`
- `SANITY_STUDIO_DATASET`
- `SANITY_WRITE_TOKEN`
- `SANITY_API_VERSION` optionally

Notes:

- `SANITY_STUDIO_PROJECT_ID` and `SANITY_STUDIO_DATASET` currently power both the website and the Studio.
- `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` are not used by the current codebase.

## Content Model

`barber` documents include:

- `name`
- `role`
- `bio`
- `specialties[]`
- `image`
- `displayOrder`
- `isPublished`
