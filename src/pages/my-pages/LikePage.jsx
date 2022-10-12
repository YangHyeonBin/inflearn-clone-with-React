import React from 'react';
import MyPage from '../../components/my-page/MyPage';
import Lecture from '../../components/main-page/recommend-lecture/Lecture';
import styled from 'styled-components';

import { useRecoilValue } from 'recoil';
import { likeListState } from '../../recoil/LectureLike';

import { priceFilters } from '../../components/my-page/priceFilters';
import { showingFilters } from '../../components/my-page/showingFilters';

import { ReactComponent as DownArrow } from '../../assets/icons/down-arrow.svg';

export default function LikePage() {
  const likedLectureList = useRecoilValue(likeListState);

  return (
    <MyPage title="좋아요">
      <main>
        <Header>
          <strong>
            전체
            <span className="amount">{likedLectureList.length}</span>
          </strong>
          <div className="button-wrapper">
            <SelectButton>
              <label className="sr-only" htmlFor="price-filter">
                가격 유형 선택
              </label>
              <select name="price-filter" id="price-filter">
                {priceFilters.map((item, index) => (
                  <option key={item.type + index} value={item.value}>
                    {item.type}
                  </option>
                ))}
              </select>
              <DownArrow />
            </SelectButton>
            <SelectButton>
              <label className="sr-only" htmlFor="showing-filter">
                가격 유형 선택
              </label>
              <select name="showing-filter" id="showing-filter">
                {showingFilters.map((item, index) => (
                  <option key={item.type + index} value={item.value}>
                    {item.type}
                  </option>
                ))}
              </select>
              <DownArrow />
            </SelectButton>
          </div>
        </Header>
        <LectureContainer>
          {likedLectureList.map((lecture, index) => (
            <Lecture
              key={lecture.title + index}
              lecture_id={lecture.id}
              title={lecture.title}
              author={lecture.author}
              rating={lecture.rating}
              ratingAmount={lecture.ratingAmount}
              originalPrice={lecture.originalPrice}
              currentPrice={lecture.currentPrice}
              students={lecture.students}
              isNew={lecture.isNew}
              onDiscount={lecture.onDiscount}
              discountTag={lecture.discountTag}
              discountTagIcon={lecture.discountTagIcon}
              discountTagBackground={lecture.discountTagBackground}
              discountTagColor={lecture.discountTagColor}
              img={lecture.img}
              gif={lecture.gif}
              // smaller={courseWidth}
            />
          ))}
        </LectureContainer>
      </main>
    </MyPage>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.75em 0 1.25em 0;

  strong {
    font-size: 0.875rem;
    color: #858a8d;
    display: flex;
    align-items: center;
  }

  .amount {
    margin-left: 0.286em;
    color: #00c471;
  }

  .button-wrapper {
    display: flex;
  }
`;

const SelectButton = styled.button`
  width: 6.5em;
  margin-right: 0.5em;
  display: flex;
  align-items: center;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  position: relative;

  &:last-child {
    margin-right: 0;
  }

  select {
    width: 100%;
    font-size: 0.813rem;
    padding: 0.769em 3.077em 0.769em 0.923em;
    color: #495057;
    cursor: pointer;
  }

  svg {
    font-size: 0.813rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1em;
    pointer-events: none;
  }
`;

const LectureContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.5em;

  a {
    width: auto;
    margin: 0;
  }
`;
