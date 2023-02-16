import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Projekte',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel des Projekts',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL des Projekts',
      type: 'url',
    }),
    defineField({
      name: 'mainImage',
      title: 'Preview-Bild',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'stack',
      title: 'Stack',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'technology' } }],
    }),
  ],
});
