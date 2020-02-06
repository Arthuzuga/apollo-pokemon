import React, { useState, useEffect } from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import styled from 'styled-components';

import { Progress } from 'antd';
import 'antd/dist/antd.css';

import Pokedex from './components/templates/Pokedex';
import {
  NormalButton,
  FireButton,
  WaterButton,
  ElectricButton,
  GrassButton,
  IceButton,
  GroundButton,
  FlyingButton,
  GhostButton,
  RockButton,
  FightingButton,
  PoisonButton,
  PsychicButton,
  BugButton,
  DarkButton,
  SteelButton,
  DragonButton,
  FairyButton
} from './components/atoms/TypesButtons';
import { GET_POKEMONS } from './apollo/queries/getPokemons';
import { GET_POKEMON } from './apollo/queries/getPokemon';

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
  width: 80%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

const PokemonRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const pokemonTypes = type => {
  switch (type) {
    case 'Normal':
      return <NormalButton>{type}</NormalButton>;
    case 'Fire':
      return <FireButton>{type}</FireButton>;
    case 'Water':
      return <WaterButton>{type}</WaterButton>;
    case 'Electric':
      return <ElectricButton>{type}</ElectricButton>;
    case 'Grass':
      return <GrassButton>{type}</GrassButton>;
    case 'Ice':
      return <IceButton>{type}</IceButton>;
    case 'Ground':
      return <GroundButton>{type}</GroundButton>;
    case 'Flying':
      return <FlyingButton>{type}</FlyingButton>;
    case 'Ghost':
      return <GhostButton>{type}</GhostButton>;
    case 'Rock':
      return <RockButton>{type}</RockButton>;
    case 'Fighting':
      return <FightingButton>{type}</FightingButton>;
    case 'Poison':
      return <PoisonButton>{type}</PoisonButton>;
    case 'Psychic':
      return <PsychicButton>{type}</PsychicButton>;
    case 'Bug':
      return <BugButton>{type}</BugButton>;
    case 'Dark':
      return <DarkButton>{type}</DarkButton>;
    case 'Steel':
      return <SteelButton>{type}</SteelButton>;
    case 'Dragon':
      return <DragonButton>{type}</DragonButton>;
    case 'Fairy':
      return <DragonButton>{type}</DragonButton>;
    default:
      return <span>{type}</span>;
  }
};

export const App = () => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [pokemonCatched, savePokemons] = useState([]);

  const { data, loading, networkStatus } = useQuery(GET_POKEMONS, {
    notifyOnNetworkStatusChange: true
  });
  const [getPokemonInfo, { data: pokemonData, loading: pokemonLoading }] = useLazyQuery(
    GET_POKEMON,
    {
      notifyOnNetworkStatusChange: true,
      onCompleted: () => {
        const { pokemon } = pokemonData;
        savePokemons([...pokemonCatched, { ...pokemon, listId: (Math.random() * 100).toFixed(0) }]);
      }
    }
  );

  const getPokemonToList = (id, name) => {
    getPokemonInfo({
      variables: {
        id,
        name
      }
    });
  };

  useEffect(() => {
    setProgress(Math.round(100 / networkStatus));
  }, [networkStatus, pokemonCatched]);

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
          getPokemonToList(pokemons[index].id, pokemons[index].name);
        }}
      />
      <PokemonList>
        {pokemonLoading ? (
          <div style={{ padding: '1rem' }}>
            <span>Carregando...</span>
          </div>
        ) : pokemonCatched.length > 0 ? (
          pokemonCatched.map(({ name, types, listId }, index) => (
            <PokemonRow key={index}>
              <span>{name}</span>
              <div>
                <div>
                  {types.map(type => {
                    return <React.Fragment key={type}>{pokemonTypes(type)}</React.Fragment>;
                  })}
                </div>
                <div
                  style={{ cursor: 'pointer' }}
                  onClick={event => {
                    savePokemons(pokemonCatched.filter(pokemon => pokemon.listId !== listId));
                  }}
                >
                  deletar
                </div>
              </div>
            </PokemonRow>
          ))
        ) : (
          <div style={{ padding: '1rem' }}>
            <span>Lista Vazia, Vamos pegar alguns Pokémons!</span>
          </div>
        )}
      </PokemonList>
    </Container>
  );
};
