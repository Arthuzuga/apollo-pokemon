import React from 'react';
import styled from 'styled-components';
import { Tooltip } from 'antd';

const Container = styled.div`
  width: 6rem;
  height: 6rem;
  margin: 0.5rem 1rem;
  background-color: white;
  object-fit: contain;
  border-radius: 50%;
  border: 2px solid #1b5e20;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Image = styled.img`
  height: 4rem;
`;

const PokemonItem = props => {
  const { src, name, onClick } = props;

  return (
    <Container onClick={() => onClick()}>
      <Tooltip title={name}>
        <Image src={src} alt={name} />
      </Tooltip>
    </Container>
  );
};

export default PokemonItem;
