import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

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
  DragonButton
} from './components/atoms/TypesButtons';

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

const pokemonTypes = (type: any) => {
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
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [pokemonCatched, savePokemons] = useState([]);

  useEffect(() => {
    setProgress(50);
    setTimeout(() => {
      setProgress(100);
      setLoading(false);
    }, 2000);
  }, [loading]);

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

  return (
    <Container>
      <Pokedex
        image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/200653/psykokwak.gif"
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
          name: 'Psyduck',
          height: "2'072''",
          weight: '43.2 lbs.',
          classification: 'Uses mysterious powers to perform various attacks'
        }}
        pokemonCatch={() => {
          const save = [
            ...pokemonCatched,
            {
              name: 'Psyduck',
              height: "2'072''",
              weight: '43.2 lbs.',
              classification: 'Uses mysterious powers to perform various attacks',
              types: ['Water']
            }
          ];
          savePokemons(save as any);
        }}
      />
      <PokemonList>
        {pokemonCatched.map(({ name, types }: any, index) => (
          <PokemonRow key={index}>
            <span>{name}</span>
            <div>
              <div>
                {types.map((type: any) => (
                  <React.Fragment key={type}>{pokemonTypes(type)}</React.Fragment>
                ))}
              </div>
              <div
                onClick={event => {
                  event.preventDefault();

                  savePokemons(pokemonCatched.filter((pokemon: any) => pokemon.name !== name));
                }}
              >
                deletar
              </div>
            </div>
          </PokemonRow>
        ))}
      </PokemonList>
    </Container>
  );
};
