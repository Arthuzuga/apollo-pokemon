import { gql } from 'apollo-boost';

export const GET_POKEMONS = gql`
  query {
    pokemons(first: 151) {
      id
      number
      name
      image
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
    }
  }
`;
