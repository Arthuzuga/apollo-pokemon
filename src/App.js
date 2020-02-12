import React, { useState, useEffect } from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import styled from 'styled-components';

import { Progress } from 'antd';

import Pokedex from './components/templates/Pokedex';
import PokemonBox from './components/templates/PokemonBox';

import { GET_POKEMONS } from './apollo/queries/getPokemons';
import { GET_POKEMON } from './apollo/queries/getPokemon';
import PokemonInfo from './components/templates/PokemonInfo.js';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 1rem;
`;

const PokemonList = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`;

export const App = () => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [pokemonCatched, savePokemons] = useState([]);
  const [pokemonSelected, selectPokemon] = useState({});

  const { data, loading, networkStatus } = useQuery(GET_POKEMONS, {
    notifyOnNetworkStatusChange: true
  });
  const [getPokemonInfo, { data: pokemonData, loading: pokemonLoading }] = useLazyQuery(
    GET_POKEMON,
    {
      notifyOnNetworkStatusChange: true,
      onCompleted: () => {
        const { pokemon } = pokemonData;
        selectPokemon(pokemon);
      }
    }
  );

  const getPokemonToList = pokemon => {
    savePokemons([...pokemonCatched, { ...pokemon, listId: (Math.random() * 100).toFixed(0) }]);
  };

  useEffect(() => {
    setProgress(Math.round(100 / networkStatus));
  }, [networkStatus, pokemonCatched, pokemonSelected, pokemonLoading]);

  if (loading) {
    return (
      <Container>
        <div style={{ padding: '1rem' }}>
          <span>Carregando...</span>
        </div>
        <Progress type="circle" status="active" percent={progress} />
      </Container>
    );
  }

  const { pokemons } = data;
  return (
    <Container>
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
          height: pokemons[index].height.minimum,
          weight: pokemons[index].weight.minimum,
          classification: pokemons[index].classification
        }}
        pokemonCatch={() => {
          getPokemonToList(pokemons[index]);
        }}
      />
      <PokemonList>
        <PokemonInfo loading={pokemonLoading} pokemon={pokemonSelected} />
        <PokemonBox pokemons={pokemonCatched} selectPokemon={getPokemonInfo} />
      </PokemonList>
    </Container>
  );
};
