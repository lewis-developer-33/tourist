import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import accomodation from './schemaTypes/accomodation'
import activity from './schemaTypes/activity'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent,accomodation,activity],
}
