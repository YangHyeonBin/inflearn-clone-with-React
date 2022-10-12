import React from 'react';
import styled from 'styled-components';

import { ReactComponent as CheckIcon } from '../../../assets/icons/check-icon.svg';

export default function PointBox({ children, pointList }) {
  return (
    <LearningPointBox>
      <div className="title">{children}</div>
      <ul className="point-list">
        {pointList.map((list, index) => (
          <li key={list + index}>
            <CheckIcon className="check-icon" />
            {list}
          </li>
        ))}
      </ul>
    </LearningPointBox>
  );
}

const LearningPointBox = styled.div`
  margin-bottom: 1em;
  padding: 2em 1.5em 2em 1em;
  border: 1px solid #e9ecef;
  border-radius: 0.5em;
  display: flex;
  color: #343a40;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.125rem;
    flex-basis: 7.223em;
    margin-right: 0.889em;
    /* line-height: 1.39;
    letter-spacing: -.3px; */
    font-weight: 500;
  }

  .point-list {
    flex: 1 1 auto;

    li {
      margin-bottom: 0.625em;
    }

    li:last-child {
      margin-bottom: 0;
    }
  }

  .check-icon {
    margin-right: 0.5em;
  }
`;
