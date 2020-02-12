import React from 'react';
import styled from 'styled-components';
import PokemonItem from '../../molecules/PokemonItem';

const Container = styled.div`
  margin: 2rem;
  width: 50%;
`;

const Header = styled.div`
  border-radius: 8px 8px 0 0;
  background-color: #43a047;
  color: white;
  padding: 8px;
  text-align: center;
`;

const Box = styled.div`
  padding: 8px;
  background-color: #a5d6a7;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  border-radius: 0 0 8px 8px;
`;

const EmptyList = styled.div`
  padding: 1rem;
`;

const PokemonBox = props => {
  const { pokemons, selectPokemon } = props;

  return (
    <Container>
      <Header>Lista Pokemon</Header>
      <Box>
        {pokemons.length > 0 ? (
          pokemons.map((pokemon, index) => {
            const { name, image } = pokemon;
            return (
              <PokemonItem
                key={name + index}
                name={name}
                src={image}
                onClick={() => {
                  selectPokemon({
                    variables: {
                      id: pokemon.id,
                      name: pokemon.name
                    }
                  });
                }}
              />
            );
          })
        ) : (
          <EmptyList>
            <span>Lista Vazia, Vamos pegar alguns Pokémons!</span>
          </EmptyList>
        )}
      </Box>
    </Container>
  );
};

export default PokemonBox;
