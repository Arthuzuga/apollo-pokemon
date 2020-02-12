import React, { useEffect } from 'react';
import styled from 'styled-components';

import TypesRow from '../molecules/TypesRow';

const Container = styled.div``;

const Number = styled.h2`
  text-align: end;
`;

const NumberContainer = styled.div`
  background-color: #f9fbe7;
  border-radius: 8px;
  border: 3px solid gray;
  padding: 4px;
`;

const StatisticDetails = ({ number, types }) => {
  return (
    <Container>
      <NumberContainer>
        <span>Número:</span>
        <Number>{number !== undefined && '# ' + number}</Number>
      </NumberContainer>
      {types !== undefined ? <TypesRow types={types} /> : <TypesRow types={[]} />}
    </Container>
  );
};

export default StatisticDetails;
