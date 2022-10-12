import React from 'react';
import styled from 'styled-components';
import PointBox from './PointBox';

import { dummyIntroduction as intro } from './dummy-detail';

export default function IntroSummary() {
  return (
    <Summary>
      <h4>
        <strong className="for-who">{intro.for}</strong>를 위해 준비한
        <br />
        <strong>
          [<span>{intro.category}</span>]강의입니다.
        </strong>
      </h4>
      <p className="description">{intro.description}</p>
      <PointBox pointList={intro.learningList}>
        ✍️
        <br />
        이런 걸<br />
        배워요!
      </PointBox>
      {/* <LearningPointBox>
        <div className="title">
          ✍️
          <br />
          이런 걸<br />
          배워요!
        </div>
        <ul className="point-list">
          {intro.learningList.map((list, index) => (
            <li key={list + index}>
              <CheckIcon className="check-icon" />
              {list}
            </li>
          ))}
        </ul>
      </LearningPointBox> */}
      <p className="summary">{intro.summary}</p>
      <img src={intro.reviewImg} alt={`${intro.title} 칭찬 리뷰 이미지`} />
    </Summary>
  );
}

const Summary = styled.div`
  h4 {
    font-size: 1.375rem;
    margin-bottom: 0.728em;
    color: #343a40;
  }

  .for-who {
    font-weight: 700;
    margin: 0;
    display: inline;
  }

  .description {
    font-size: 1rem;
    margin-bottom: 0.5em;
    color: #495057;
    /* line-height: 1.69; */
    /* letter-spacing: -0.5px; */
    font-weight: 500;
  }

  .summary {
    margin-bottom: 1em;
    padding: 1em;
    border-radius: 0.25em;
    background-color: #343a40;
    color: white;
    font-weight: 700;
    text-align: center;
    white-space: pre-wrap;
  }

  img {
    display: block;
    margin: 0 auto 1.25em;
    padding-top: 0.625em;
    max-width: 100%;
  }
`;

// const LearningPointBox = styled.div`
//   margin-bottom: 1em;
//   padding: 2em 1.5em 2em 1em;
//   border: 1px solid #e9ecef;
//   border-radius: 0.5em;
//   display: flex;
//   color: #343a40;

//   .title {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
//     font-size: 1.125rem;
//     flex-basis: 7.223em;
//     margin-right: 0.889em;
//     /* line-height: 1.39;
//     letter-spacing: -.3px; */
//     font-weight: 500;
//   }

//   .point-list {
//     flex: 1 1 auto;

//     li {
//       margin-bottom: 0.625em;
//     }

//     li:last-child {
//       margin-bottom: 0;
//     }
//   }

//   .check-icon {
//     margin-right: 0.5em;
//   }
// `;
