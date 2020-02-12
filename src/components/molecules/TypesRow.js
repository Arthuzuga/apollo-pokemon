import React, { useEffect } from 'react';
import styled from 'styled-components';

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
} from '../atoms/TypesButtons';

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

const Container = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #f9fbe7;
  border-radius: 8px;
  border: 3px solid gray;
`;
const TypesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TypesRow = ({ types }) => {
  if (types.length === 0) {
    return (
      <Container>
        <span>Tipos: </span>
      </Container>
    );
  }

  return (
    <Container>
      <span>Tipos: </span>
      <TypesContainer>{types.map(type => pokemonTypes(type))}</TypesContainer>
    </Container>
  );
};

export default TypesRow;
