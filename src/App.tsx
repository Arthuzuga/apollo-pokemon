import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import Pokedex from './components/templates/Pokedex/pokedex';
import { GET_POKEMONS } from './apollo/queries/getPokemon';

export const App = () => {
  const { data, loading } = useQuery(GET_POKEMONS);
  const [index, setIndex] = useState(0);

  if (loading) {
    return <div>Carregando...</div>;
  }

  const { pokemons } = data;
  return (
    <div>
      <Pokedex
        image={pokemons[index].image}
        previousPokemon={() => {
          if (index <= 0) {
            setIndex(0);
          } else {
            setIndex(index - 1);
          }
        }}
        nextPokemon={() => {
          if (index >= 150) {
            setIndex(150);
          } else {
            setIndex(index + 1);
          }
        }}
        pokemon={{
          name: pokemons[index].name,
          number: pokemons[index].number,
          type: pokemons[index].types,
          height: pokemons[index].height.minimum,
          weight: pokemons[index].weight.minimum,
          classification: pokemons[index].classification
        }}
      />
    </div>
  );
};
