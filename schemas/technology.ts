import { defineField, defineType } from "sanity";

export default defineType({
  name: "technology",
  title: "Technologien",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Technologie Titel",
      type: "string",
    }),
    defineField({
      name: "icon",
      title: "Icon der Technologie",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
