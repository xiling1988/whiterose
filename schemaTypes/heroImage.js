import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'heroImage',
  title: 'Hero Image',
  type: 'document',
  fields: [
    defineField({
      name: 'orderRank',
      title: 'Order Rank',
      type: 'string',
      hidden: true, // This field is managed by the plugin, so it's hidden
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('An image is required'),
    }),
    defineField({
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
      description:
        'A short description of the image for accessibility and SEO.',
      validation: (Rule) =>
        Rule.required()
          .min(10)
          .max(100)
          .error('Alt text should be between 10 and 100 characters'),
    }),
  ],
})
