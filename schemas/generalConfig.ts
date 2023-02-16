import { defineField, defineType } from "sanity";

export default defineType({
  name: "generalConfig",
  title: "Allgemeine Einstellungen",
  type: "document",
  fields: [
    defineField({
      name: "hero_text",
      title: "Hero Text",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "hero_image",
      title: "Hero Bild",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "more_info_link",
      title: '"Mehr Infos" Link',
      type: "string",
    }),
    defineField({
      name: "contact_email",
      title: "Kontakt Email",
      type: "string",
    }),
  ],
});
