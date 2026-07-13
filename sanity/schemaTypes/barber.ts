import { defineArrayMember, defineField, defineType } from "sanity";

export const barberType = defineType({
  name: "barber",
  title: "Barber",
  type: "document",
  groups: [
    { name: "profile", title: "Profile", default: true },
    { name: "website", title: "Website" },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      group: "profile",
      description: "The barber's name as it appears on the website.",
      validation: (rule) => rule.required().min(2),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      group: "profile",
      description: "Short title shown under the barber's name.",
      validation: (rule) => rule.required().min(2),
    }),
    defineField({
      name: "image",
      title: "Profile Image",
      type: "image",
      group: "profile",
      description: "Upload the headshot or portrait used on the team section.",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      group: "profile",
      description: "A short introduction to help clients get to know this barber.",
      rows: 4,
      validation: (rule) => rule.required().min(20).max(320),
    }),
    defineField({
      name: "specialties",
      title: "Specialties",
      type: "array",
      group: "profile",
      description: "Add a few specialties or signature services, one per item.",
      of: [
        defineArrayMember({
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      group: "website",
      initialValue: 0,
      description: "Lower numbers appear first on the site.",
      validation: (rule) => rule.integer().min(0),
    }),
    defineField({
      name: "isPublished",
      title: "Show on Website",
      type: "boolean",
      group: "website",
      initialValue: true,
      description: "Turn this off to hide a barber without deleting the document.",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "image",
      isPublished: "isPublished",
    },
    prepare({ title, subtitle, media, isPublished }) {
      return {
        title,
        subtitle: isPublished === false ? `${subtitle} • Hidden from website` : subtitle,
        media,
      };
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "displayOrderAsc",
      by: [
        { field: "displayOrder", direction: "asc" },
        { field: "_createdAt", direction: "asc" },
      ],
    },
  ],
});
