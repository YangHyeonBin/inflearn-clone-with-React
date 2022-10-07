import React from 'react';
import styled from 'styled-components';

import { ReactComponent as ArrowIcon } from '../../assets/auth-right-arrow.svg';
import { ReactComponent as FolderIcon } from '../../assets/folder-icon.svg';
import { ReactComponent as HeartIcon } from '../../assets/heart.svg';
import { ReactComponent as ShareIcon } from '../../assets/share-icon.svg';

export default function LectureSideBar({ lecture }) {
  return (
    <div className="lecture-side-bar-wrapper">
      <aside className="lecture-side-bar">
        <div className="auth-button-wrapper">
          <button className="auth-button">
            <img
              src="https://cdn.inflearn.com/assets/images/corporations/musinsa.png"
              alt="무신사"
            />
            <div className="auth-info">
              <div className="title-container">
                <h3>무신사</h3>
                <div className="auth-icon">
                  <span>인증</span>
                  <ArrowIcon />
                </div>
              </div>
              <p className="auth-desc">
                지금 이 회사에 <span className="highlight">관심있는</span>{' '}
                사람들도 듣는 중!
              </p>
            </div>
          </button>
        </div>
        <div className="lecture-info-wrapper__side-bar">
          <TopWrapper>
            <div className="price">{lecture.currentPrice}원</div>
            <div>
              <PaymentContainer>
                <button className="coupon" type="button">
                  10% 쿠폰 받기 (3개)
                </button>
                <button className="register" type="button">
                  수강신청 하기
                </button>
                <button className="add-to-cart" type="button">
                  바구니에 담기
                </button>
              </PaymentContainer>
              <SubButtons>
                <button type="button">
                  <FolderIcon className="icon" />
                  폴더에 추가
                </button>
                <button type="button">
                  <HeartIcon className="icon" />
                  {lecture.likes}
                </button>
                <button type="button">
                  <ShareIcon className="icon" />
                  공유
                </button>
              </SubButtons>
            </div>
          </TopWrapper>
          <DownWrapper>
            <ul>
              <li>
                지식공유자: <a className="author">{lecture.author}</a>
              </li>
              <li>
                총 {lecture.totalLectureAmount}개 수업 (
                {lecture.totalRunningTime})
              </li>
              <li>
                수강기한: <span className="term">{lecture.term}</span>
              </li>
              <li>수료증: {lecture.certificate}</li>
              <li>
                난이도:{' '}
                <span className={lecture.difficulty !== 1 ? 'gray' : ''}>
                  입문
                </span>{' '}
                -{' '}
                <span className={lecture.difficulty !== 2 ? 'gray' : ''}>
                  초급
                </span>{' '}
                -{' '}
                <span className={lecture.difficulty !== 3 ? 'gray' : ''}>
                  중급이상
                </span>
              </li>
            </ul>
            <div className="description-blue">
              지식공유자 답변이 제공되는 강의입니다.
            </div>
          </DownWrapper>
        </div>
      </aside>
    </div>
  );
}

const TopWrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  border-bottom: 1px solid #f1f3f5;

  .price {
    margin-bottom: 1.25rem;
    padding: 1.25rem 1.5rem 0;
    font-size: 1.5rem;
    font-weight: 700;
    color: #343a40;
  }
`;

const PaymentContainer = styled.div`
  margin-bottom: 0.5rem;
  padding: 0 1.5rem;
  display: grid;
  row-gap: 0.5rem;

  button {
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.47;
    height: 3rem;
    padding: 0 1rem;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
  }

  .coupon {
    color: #00c471;
    background-color: white;
    border: 1px solid #00c471;
    font-weight: 500;
  }

  .register {
    color: white;
    background-color: #00c471;
  }

  .add-to-cart {
    color: #495057;
    border: 1px solid #d5dbe2;
  }
`;

const SubButtons = styled.div`
  margin-bottom: 1.25em;
  padding: 0 1.25em;
  color: #495057;
  text-align: center;

  button {
    font-size: 0.875rem;
    display: inline-flex;
    align-items: center;
    text-decoration: underline;
    padding: 0.714em 0.857em;
    font-weight: 500;
    cursor: pointer;
    position: relative;
  }

  button::after {
    content: '';
    width: 1px;
    height: 1rem;
    background-color: #dee2e6;
    position: absolute;
    right: 0;
  }

  button:last-child::after {
    display: none;
  }

  .icon {
    margin-right: 0.5714em;
  }
`;

const DownWrapper = styled.div`
  padding: 1em 1.5em;
  color: #3e4042;

  ul {
    list-style: inside;
  }

  li {
    font-size: 0.875rem;
    margin-bottom: 0.286em;
  }

  li:last-child {
    margin-bottom: 0.572em;
  }

  .author {
    color: #175cbe;
    text-decoration: underline;
  }

  .term {
    font-weight: 900;
  }

  .gray {
    color: #abb0b5;
  }

  .description-blue {
    font-size: 0.875rem;
    padding: 0.286em 0.786em;
    color: #175cbe;
    background-color: rgba(23, 92, 190, 0.06);
    text-align: center;
  }
`;
