import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'accomodation',
  title: 'Accomodation',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent'
    }),
    defineField({
      name: 'accomodation',
      title: 'Accomodation',
      type: 'blockContent'
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string'
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string'
    }),
    defineField({
      name: 'rooms',
      title: 'Rooms',
      type: 'string'
    }),
    defineField({
      name: 'property',
      title: 'Property',
      type: 'string'
    }),
    defineField({
      name: 'meal',
      title: 'Meal',
      type: 'string'
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
