import React from 'react';
import styled from 'styled-components';

interface GapDivsProps {
  children: React.ReactNode; // Propriedade para receber as divs filhas
  style: Record<string, any>
}

const Container = styled.div`
  
  display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    justify-content: space-between;
    gap: 25px;
    padding: 0 25px;
  @media (max-width: 480px) {
    gap: 15px;
    padding: 0 15px;
  }
`;

const ContainerMain: React.FC<GapDivsProps> = ({ children, style }) => {
  return (
    <Container style={style}>
      {children}
    </Container>
  );
};

export default ContainerMain;