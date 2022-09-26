import React from 'react';
import styled from 'styled-components';

export default function Wrapper(props) {
  return (
    <Container>
      <div className="margin">{props.children}</div>
    </Container>
  );
}

const Container = styled.section`
  padding: 1.5rem 0;

  .margin {
    max-width: 75rem;
    margin: 0 auto;
    padding: 0 0.625rem;
  }

  .lecture-wrapper {
    position: relative;
  }
`;
