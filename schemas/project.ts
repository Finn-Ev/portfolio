import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Projekte",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel des Projekts",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Beschreibung des Projekts",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "url",
      title: "URL des Projekts",
      type: "url",
    }),
    defineField({
      name: "source_url",
      title: "URL zum Source Code",
      type: "url",
    }),
    defineField({
      name: "preview_image",
      title: "Preview-Bild",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "stack",
      title: "Stack",
      type: "array",
      of: [{ type: "reference", to: { type: "technology" } }],
    }),
  ],
});
