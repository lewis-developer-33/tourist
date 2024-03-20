import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'meal',
  title: 'Meal',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    })
  ],
})
