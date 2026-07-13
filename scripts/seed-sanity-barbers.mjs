import { createReadStream } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@sanity/client";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const projectId = process.env.SANITY_STUDIO_PROJECT_ID?.trim();
const dataset = process.env.SANITY_STUDIO_DATASET?.trim();
const token = process.env.SANITY_WRITE_TOKEN?.trim() || process.env.SANITY_READ_TOKEN?.trim();
const apiVersion = process.env.SANITY_API_VERSION?.trim() || "2025-01-01";

if (!projectId || !dataset || !token) {
  throw new Error(
    "Missing Sanity configuration. Set NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, and SANITY_WRITE_TOKEN before seeding.",
  );
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const seedBarbers = [
  {
    _id: "barber-marco-reyes",
    name: "Marco Reyes",
    role: "Owner / Senior Barber",
    bio: "Marco has spent more than a decade behind the chair and is known for clean fades, sharp lineups, and cuts that grow out well between visits.",
    specialties: ["Skin fades", "Classic cuts", "Beard shape-ups"],
    displayOrder: 1,
    imagePath: "public/barber-marco.svg",
  },
  {
    _id: "barber-julian-cruz",
    name: "Julian Cruz",
    role: "Barber",
    bio: "Julian works with textured styles, tapers, and modern shape work for clients who want a fresh cut that still feels easy to wear.",
    specialties: ["Textured cuts", "Tapers", "Line work"],
    displayOrder: 2,
    imagePath: "public/barber-julian.svg",
  },
  {
    _id: "barber-andre-sutton",
    name: "Andre Sutton",
    role: "Barber",
    bio: "Andre is the barber regulars book when they want consistency, solid beard work, and an appointment that starts on time.",
    specialties: ["Business cuts", "Beard cleanup", "Routine maintenance"],
    displayOrder: 3,
    imagePath: "public/barber-andre.svg",
  },
];

async function uploadImage(relativeImagePath) {
  const absoluteImagePath = path.join(projectRoot, relativeImagePath);
  const filename = path.basename(absoluteImagePath);
  const stream = createReadStream(absoluteImagePath);

  return client.assets.upload("image", stream, {
    filename,
    contentType: "image/svg+xml",
  });
}

for (const barber of seedBarbers) {
  const asset = await uploadImage(barber.imagePath);

  await client.createOrReplace({
    _id: barber._id,
    _type: "barber",
    name: barber.name,
    role: barber.role,
    bio: barber.bio,
    specialties: barber.specialties,
    displayOrder: barber.displayOrder,
    isPublished: true,
    image: {
      _type: "image",
      asset: {
        _type: "reference",
        _ref: asset._id,
      },
    },
  });

  console.log(`Seeded ${barber.name}`);
}

console.log("Sanity barber seed complete.");
