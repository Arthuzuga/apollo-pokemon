import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';
import PokemonDetails from '../../organisms/PokemonDetails';

import pokeball from '../../../assets/images/pokeball.png';
import StatisticDetails from '../../organisms/StatisticDetails';

const Container = styled.div`
  margin: 2rem;
  width: 30%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;
const LoadingContainer = styled.div`
  margin: 2rem;
  width: 30%;
  border-radius: 8px;
  border: 4px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9fbe7;
  padding: 1.5rem 2rem;
`;

const Pokeball = styled.img`
  margin-top: 1rem;
  height: 4rem;
  width: 4rem;
  animation: lds 0.8s linear infinite;

  @keyframes lds {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const PokemonInfo = ({ pokemon, loading, onClick }) => {
  const { name, image, types, number } = pokemon;

  if (loading) {
    return (
      <LoadingContainer>
        <span>Carregando...</span>
        <Spin indicator={<Pokeball src={pokeball} alt="pokeball" />} spinning={true} />
      </LoadingContainer>
    );
  }

  return (
    <Container onClick={onClick}>
      <PokemonDetails image={image} name={name} />
      <StatisticDetails number={number} types={types} />
    </Container>
  );
};

export default PokemonInfo;
