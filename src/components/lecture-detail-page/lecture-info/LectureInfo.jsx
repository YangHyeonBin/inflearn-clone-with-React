import React from 'react';
import styled from 'styled-components';

import Introduction from './Introduction';
import Curriculum from './Curriculum';

export default function LectureInfo() {
  return (
    <LectureInfoWrapper>
      <article className="container">
        <Introduction />
        <Curriculum />
      </article>
    </LectureInfoWrapper>
  );
}

const LectureInfoWrapper = styled.div`
  padding: 0 0.5rem;
  flex: 2 1 0;

  .container {
    width: 45rem;
    padding: 1.75rem 1rem 0 1.55rem;
  }
`;
