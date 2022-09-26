import React from 'react';
import styled from 'styled-components';

import HeadingTitle from './HeadingTitle';

export default function Heading({ heading }) {
  return (
    <Wrapper>
      <HeadingTitle heading={heading} />
      {heading.description && (
        <p className="description">{heading.description}</p>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: #1e1e1e;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;

  .title-anchor {
    display: flex;
  }

  .title-anchor-icon {
    margin-left: 0.5rem;
  }

  .description {
    font-size: 0.9rem;
    font-weight: 400;
    color: #757575;
    margin-top: 0.25rem;
  }

  .tag {
    font-size: 0.75rem;
    font-weight: 700;
    color: #fa4c3d;
    letter-spacing: normal;
  }

  .category-name {
    color: #00c471;
  }
`;
