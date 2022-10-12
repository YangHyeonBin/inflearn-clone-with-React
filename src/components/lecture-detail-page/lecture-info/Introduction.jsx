import React from 'react';
import styled from 'styled-components';

import IntroSummary from './IntroSummary';
import PointBox from './PointBox';
import Hr from './Hr';

import { ReactComponent as LinkIcon } from '../../../assets/icons/link-icon.svg';
import { ReactComponent as DownArrow } from '../../../assets/icons/down-arrow.svg';

import { dummyIntroduction as intro } from './dummy-detail';

// 더 좋은 방법이 있다면 개선할 것
const comment1 = intro.authorComment.slice(0, 3); // (0, 3)에서 뒤는 exclusive인 듯, 2까지 표시하려면 3을 적어줘야 함
const commentGif = intro.authorComment[3];
const comment2 = intro.authorComment.slice(4);

export default function Introduction() {
  return (
    <IntroductionWrapper>
      <IntroSummary />
      <h3>{intro.title}</h3>
      <p className="description">{intro.description}</p>
      <strong className="margin-top">이런 분들에게 도움됩니다</strong>
      <TargetList>
        {intro.targets.map((target, index) => (
          <li key={target.title + index}>
            <img src={target.icon} aria-hidden="true" />
            <p>{target.title}</p>
          </li>
        ))}
      </TargetList>
      <AuthorCommentWrapper>
        <strong>지식공유자의 한 마디</strong>
        <img
          className="author-img"
          src={intro.authorImg}
          alt={`지식공유자(${intro.author}) 사진`}
        />
        {comment1.map((comment, index) => (
          <p className="comment" key={index}>
            {comment}
          </p>
        ))}
        <div className="gifs">
          {commentGif.map((gif, index) => (
            <div className="gif-wrapper" key={index}>
              <img className="gif" src={gif.src} alt={gif.label} />
              <p className="label">{gif.label}</p>
            </div>
          ))}
        </div>
        {comment2.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </AuthorCommentWrapper>
      <Hr />
      <OtherLectureWrapper>
        <strong>이 강의와 연관된 강의</strong>
        <div className="item">
          <img
            className="thumbnail"
            src={intro.moreLecture.img}
            alt={`${intro.moreLecture.title} 썸네일`}
          />
          <div className="description-box">
            <em>{intro.moreLecture.title}</em>
            <p className="other-lecture-description">
              {intro.moreLecture.description}
            </p>
          </div>
        </div>
      </OtherLectureWrapper>
      <Hr />
      <div>
        <strong>강의 Q&amp;A</strong>
        <QnABox>
          <p className="question">Q. {intro.qna.q}</p>
          <p className="answer">{intro.qna.a}</p>
        </QnABox>
      </div>
      <Hr />
      <div>
        <strong className="big-margin">
          <span className="normal">지식공유자가 알려주는</span>
          <br />
          강의 수강 꿀팁!
        </strong>
        <PointBox pointList={intro.tips.who}>
          🎓
          <br />
          이런 분들께
          <br />
          추천드려요!
        </PointBox>
        <PointBox pointList={intro.tips.prerequisite}>
          📚
          <br />
          선수 지식,
          <br />
          필요한가요?
        </PointBox>
      </div>
      <hr style={{ margin: '2.625em 0', borderTop: '1px solid #ededed' }} />
      <AboutAuthor>
        <div className="author-header">
          <p className="hi">
            안녕하세요
            <br />
            <a className="author-name">
              {intro.author}
              <LinkIcon className="link-icon" />
            </a>
            입니다.
          </p>
          <img
            src={intro.authorImg}
            alt={`${intro.author} 사진`}
            className="img__author-header"
          />
        </div>
        <div className="history-wrapper">
          <ul className="history-list">
            {intro.authorHistory.map((history, index) => (
              <li key={index}>{history}</li>
            ))}
          </ul>
          <div className="see-more">
            <button type="button" className="see-more-button">
              더 읽기
              <DownArrow />
            </button>
          </div>
        </div>
      </AboutAuthor>
    </IntroductionWrapper>
  );
}

const IntroductionWrapper = styled.section`
  h3 {
    font-size: 1.625rem;
    margin: 1.539em 0 0.462em;
    font-weight: 700;
    color: #343a40;
  }

  .description {
    color: #495057;
    margin-bottom: 0.5em;
    white-space: pre-wrap;
  }

  strong {
    font-size: 1.375rem;
    font-weight: 700;
    color: #343a40;
    display: block;
    margin-bottom: 0.455em;

    .normal {
      font-weight: normal;
    }
  }

  strong.margin-top {
    margin-top: 1.819em;
  }

  strong.big-margin {
    margin: 1.91em 0 1.091em;
  }
`;

const TargetList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  li {
    text-align: center;
    margin-bottom: 0.75em;
    padding: 0.75em;
  }

  img {
    display: block;
    width: 80px;
    margin: 0 auto;
  }

  p {
    margin: 0.25em 0 0.5em;
    white-space: pre-wrap;
    font-size: 0.875rem;
    line-height: 1.69;
  }
`;

const AuthorCommentWrapper = styled.section`
  margin: 2em 0 1em;
  padding: 1.5em;
  border: 1px solid #e9ecef;
  border-radius: 0.5em;
  background-color: #f8f9fa;

  .author-img {
    display: block;
    font-size: 1rem;
    width: 19.438em;
    /* height: 15.563em; */
    padding-top: 0.625em;
    margin-bottom: 1.25em;
  }

  p {
    color: #495057;
  }

  .comment {
    padding-bottom: 0.625em;
  }

  .gifs {
    display: flex;
  }

  .gif-wrapper {
    margin: 1.5em 0;
    padding: 0 0.5em;
  }

  .gif {
    max-width: 100%;
    display: block;
  }

  .label {
    font-size: 0.813rem;
    margin-bottom: 0.924em;
    text-align: center;
  }
`;

const OtherLectureWrapper = styled.div`
  .item {
    display: flex;
    align-items: center;
    margin: 1.5em 0 2.813em;
  }

  img {
    display: block;
    width: 150px;
    /* height: 98px; */
    cursor: pointer;
  }

  .description-box {
    flex: 1 1 auto;
    margin-left: 0.5em;
    line-height: 1.7;

    em {
      font-weight: 700;
      cursor: pointer;
    }

    em:hover {
      color: #363636;
    }

    .other-lecture-description {
      font-size: 0.875rem;
      white-space: pre-wrap;
      cursor: pointer;
    }

    .other-lecture-description:hover {
      color: #363636;
    }
  }
`;

const QnABox = styled.section`
  margin: 1.5em 0 1em;
  padding: 1.5em;
  border: 1px solid #dee2e6;
  border-radius: 0.5em;

  .question {
    margin-bottom: 1em;
    color: #343a40;
    font-weight: 700;
  }

  .answer {
    color: #495057;
    line-height: 1.6;
    font-size: 0.938rem;
  }
`;

const AboutAuthor = styled.section`
  margin-bottom: 4em;

  .author-header {
    display: flex;
    margin-bottom: 1em;
    align-items: center;
  }

  .hi {
    font-size: 1.375rem;
    color: #212529;
  }

  .author-name {
    font-weight: 700;
    text-decoration: underline;
  }

  .link-icon {
    margin: 0 0.182em;
  }

  .img__author-header {
    display: block;
    width: 3.875em;
    height: 3.875em;
    object-fit: cover;
    border-radius: 100%;
    border: 1px solid #dee2e6;
    margin-left: auto;
  }

  .history-wrapper {
    color: #222222;
  }

  .history-list {
    max-height: 13.846em;
    overflow-y: hidden;
  }

  .history-list li {
    font-size: 0.813rem;
  }

  .see-more::before {
    content: '';
    background: linear-gradient(
      180deg,
      hsla(0, 0%, 100%, 0) 0,
      hsla(0, 0%, 100%, 0.3) 30%,
      #fff
    );
    width: 100%;
    height: 3.438em;
    position: absolute;
    bottom: 100%;
  }

  .see-more {
    width: 100%;
    height: 2.5em;
    display: flex;
    position: relative;
  }

  .see-more-button {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    padding-right: 0.857em;
    color: #495057;
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;

    svg {
      margin-left: 0.286em;
    }
  }
`;
