import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'socialIcons',
  title: 'Social Media Icons',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'string',
    }),
  ],
});
