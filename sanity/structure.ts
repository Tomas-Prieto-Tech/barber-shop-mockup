import type { StructureResolver } from "sanity/structure";

const barberOrdering = [
  { field: "displayOrder", direction: "asc" as const },
  { field: "_createdAt", direction: "asc" as const },
];

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .id("barbers")
        .title("Barbers")
        .schemaType("barber")
        .child(
          S.documentTypeList("barber")
            .title("Barbers")
            .defaultOrdering(barberOrdering)
        ),
    ]);
