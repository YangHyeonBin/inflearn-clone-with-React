import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useRecoilState } from 'recoil';
import { likeListState } from '../../recoil/LectureLike';
import { lectureLikeAmountState } from '../../recoil/LectureLikeAmount';
import { cartState } from '../../recoil/Cart';

import { allLectures } from '../../assets/dummy-datas/allLectures';

import { ReactComponent as ArrowIcon } from '../../assets/icons/auth-right-arrow.svg';
import { ReactComponent as FolderIcon } from '../../assets/icons/folder-icon.svg';
import { ReactComponent as EmptyHeart } from '../../assets/icons/empty-heart.svg';
import { ReactComponent as FilledHeart } from '../../assets/icons/filled-heart.svg';
import { ReactComponent as ShareIcon } from '../../assets/icons/share-icon.svg';

export default function LectureSideBar({ lecture }) {
  const [likeList, setLikeList] = useRecoilState(likeListState);
  const [likeAmount, setLikeAmount] = useRecoilState(lectureLikeAmountState);
  const [cart, setCart] = useRecoilState(cartState);

  const currentLectureIndex = allLectures.indexOf(lecture);

  const likeClickHandler = () => {
    if (likeList.includes(lecture)) {
      setLikeList(likeList.filter(item => item.title !== lecture.title));
      const amount1 = likeAmount.slice(0, currentLectureIndex);
      const amount2 = likeAmount.slice(currentLectureIndex + 1);
      const modifiedAmount = Number(likeAmount[currentLectureIndex]) - 1;
      setLikeAmount([...amount1, `${modifiedAmount}`, ...amount2]);
    } else {
      setLikeList([...likeList, lecture]);
      const amount1 = likeAmount.slice(0, currentLectureIndex);
      const amount2 = likeAmount.slice(currentLectureIndex + 1);
      const modifiedAmount = Number(likeAmount[currentLectureIndex]) + 1;
      setLikeAmount([...amount1, `${modifiedAmount}`, ...amount2]);
    }
  };

  const addToCartHandler = () => {
    setCart([allLectures[currentLectureIndex], ...cart]);
  };

  return (
    <SideBar>
      <aside className="side-bar">
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
        <div className="lecture-info-wrapper">
          <TopWrapper>
            <div className="price">{lecture.currentPrice}원</div>
            <div>
              <PaymentContainer>
                <button className="coupon" type="button">
                  10% 쿠폰 받기 (3개)
                </button>
                {cart.includes(lecture) ? (
                  <CartLink to="/carts" className="register">
                    수강 바구니로 이동
                  </CartLink>
                ) : (
                  <>
                    <button className="register" type="button">
                      수강신청 하기
                    </button>
                    <button
                      className="add-to-cart"
                      type="button"
                      onClick={addToCartHandler}>
                      바구니에 담기
                    </button>
                  </>
                )}
              </PaymentContainer>
              <SubButtons>
                <button type="button">
                  <FolderIcon className="icon" />
                  폴더에 추가
                </button>
                <button type="button" onClick={likeClickHandler}>
                  {likeList.includes(lecture) ? (
                    <FilledHeart
                      className="icon"
                      aria-label="좋아요 목록에서 삭제"
                    />
                  ) : (
                    <EmptyHeart
                      className="icon"
                      aria-label="좋아요 목록에 추가"
                    />
                  )}
                  {likeAmount[currentLectureIndex]}
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
    </SideBar>
  );
}

const SideBar = styled.div`
  padding: 0 0.5rem;
  flex: 1 1 0;
  letter-spacing: -0.3px;
  line-height: 1.43;

  .side-bar {
    margin: 1.75rem 2.125rem 1.25rem auto;
    position: sticky;
    top: 75px;
    width: 20.938rem;
  }

  .auth-button-wrapper {
    display: flex;
    margin: 1.25rem 0 1rem;
  }

  .auth-button {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0.688rem 0.625rem 0.688rem 1rem;
    border: 1px solid rgba(20, 150, 223, 0.25);
    border-radius: 8px;
    background-color: #e8f5ff;
    color: #3e4042;
    cursor: pointer;
  }

  .auth-button:hover {
    background-color: #fafdff;
    border-color: #699ce8;
  }

  .auth-button:hover .auth-icon {
    color: #699ce8;
  }

  .auth-button:hover path {
    fill: #699ce8;
  }

  .auth-button img {
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    margin-right: 0.625rem;
    border: 1px solid white;
    border-radius: 50%;
  }

  .auth-info {
    flex: 1 1 auto;
  }

  .auth-button .title-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.25rem;
  }

  .auth-button h3 {
    font-weight: 700;
    position: relative;
  }

  .auth-button h3::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: rgba(20, 150, 223, 0.16);
  }

  .auth-icon {
    font-size: 0.75rem;
    font-weight: 700;
    display: flex;
    align-items: center;
  }

  .auth-icon span {
    text-decoration: underline;
    text-underline-position: under;
    margin-right: 5.67px;
  }

  .auth-icon:hover {
    color: #699ce8;
  }

  .auth-icon svg {
    width: 5.17px;
    height: 9.33px;
  }

  .auth-button .auth-desc {
    font-size: 0.813rem;
    font-weight: 500;
  }

  .auth-desc .highlight {
    color: #0c8cd4;
    font-weight: 700;
  }

  .lecture-info-wrapper {
    background-color: #f8f9fa;
    border: 1px solid #f1f3f5;
    border-radius: 8px;
    box-shadow: 0 1px 3px 0 rgba(33, 37, 41, 0.03);
  }
`;

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

const CartLink = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.47;
  height: 3rem;
  padding: 0 1rem;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
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
