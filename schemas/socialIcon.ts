import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'socialIcon',
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
    defineField({
      name: 'bgColor',
      title: 'Hintergrundfarbe (Hex)',
      type: 'string',
    }),
  ],
});
