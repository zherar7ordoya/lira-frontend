import {gql, DocumentNode} from 'apollo-boost'

export const GET_CHARACTER: DocumentNode = gql`
{
  getCharacters {
    _id
    name
    image
    race
  }
}
`