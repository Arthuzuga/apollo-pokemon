import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Name = styled.h1``;

const Image = styled.img`
  height: 8rem;
`;

const NameContainer = styled.div`
  background-color: #f9fbe7;
  border-radius: 8px;
  border: 3px solid gray;
  padding: 4px;
`;
const ImageContainer = styled.div`
  border-radius: 8px;
  border: 3px solid gray;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const PokemonDetails = ({ image, name }) => {
  return (
    <Container>
      <NameContainer>
        <span>Nome:</span>
        <Name>{name}</Name>
      </NameContainer>
      <ImageContainer>
        <Image src={image} alt={name} />
      </ImageContainer>
    </Container>
  );
};

export default PokemonDetails;
