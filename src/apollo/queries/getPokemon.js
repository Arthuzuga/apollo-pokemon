import { gql } from 'apollo-boost';

export const GET_POKEMON = gql`
  query getPokemon($id: String, $name: String) {
    pokemon(id: $id, name: $name) {
      id
      number
      name
      types
    }
  }
`;
