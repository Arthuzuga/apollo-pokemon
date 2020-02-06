import { gql } from 'apollo-boost';

export const GET_POKEMONS = gql`
  query {
    pokemons(first: 151) {
      id
      name
      image
      weight {
        minimum
      }
      height {
        minimum
      }
      classification
    }
  }
`;
