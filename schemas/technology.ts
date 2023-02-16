import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'technology',
  title: 'Technologie',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Technologie Titel',
      type: 'string',
    }),
    defineField({
      name: 'skill',
      title: 'Skill-Level in der Technologie',
      type: 'number',
      options: {
        list: [
          { title: '1', value: 1 },
          { title: '2', value: 2 },
          { title: '3', value: 3 },
          { title: '4', value: 4 },
          { title: '5', value: 5 },
        ],
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Icon der Technologie',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});
