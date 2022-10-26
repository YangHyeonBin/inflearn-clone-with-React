import React from 'react';
import styled from 'styled-components';

export default function RoadmapItem({ title, img }) {
  return (
    <RoadmapListItem>
      <a>
        <img src={img} alt={title} />
        <h3>{title}</h3>
      </a>
    </RoadmapListItem>
  );
}

const RoadmapListItem = styled.li`
  width: 290.5px;
  margin-right: 0.375rem;

  &:last-child {
    margin-right: 0;
  }

  a {
    display: block;
  }

  img {
    max-width: 100%;
  }

  h3 {
    padding: 1.5rem;
    font-size: 0.95rem;
    font-weight: 700;
    color: #363636;
    line-height: 1.3;
    margin-bottom: 0.8888em;
  }
`;
