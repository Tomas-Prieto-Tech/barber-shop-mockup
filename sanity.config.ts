import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { structure } from "./sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: process.env.SANITY_STUDIO_PROJECT_TITLE?.trim() || "The Standard Barbershop",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID?.trim() || "",
  dataset: process.env.SANITY_STUDIO_DATASET?.trim() || "",
  plugins: [structureTool({ structure })],
  schema: {
    types: schemaTypes,
  },
});
