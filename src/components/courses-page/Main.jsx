import React from 'react';
import SearchBar from './SearchBar';
import SkillSearchBar from './SkillSearchBar';
import Filter from './Filter';
import Lecture from '../main-page/recommend-lecture/Lecture';
import { skillTags } from './skillTags';
import { orderingTypes } from './orderingTypes';
// import { jsPopulars } from '../main-page/recommend-lecture/jsPopulars';
// import { gitPopulars } from '../main-page/recommend-lecture/gitPopulars';
// import { similarRoots } from '../main-page/recommend-lecture/similarRoots';
import { allLectures as dummyCourses } from '../../assets/dummy-datas/allLectures';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as DownArrow } from '../../assets/icons/down-arrow.svg';
import Pagination from './Pagination';

const MAX_PAGE = 10;

export default function Main() {
  // const dummyCourses = jsPopulars.concat(gitPopulars, similarRoots);

  // const courseWidth = { width: '13.813rem', margin: 0 };
  const dummyPaginaitonArray = [];

  for (let i = 1; i < 88; i++) {
    dummyPaginaitonArray.push(i);
  }

  return (
    <section>
      {/* <div> */}
      <header>
        <h2 className="sr-only">전체 카테고리</h2>
        <SearchBar />
      </header>
      <main>
        <CategoryNavigation>
          <h2>전체</h2>
        </CategoryNavigation>
        <TagConatiner>
          <SkillSearchBar />
          {skillTags.map((tag, index) => (
            <button type="button" key={tag + index} className="skill-tag">
              {tag}
            </button>
          ))}
          <button type="button" className="skill-tag more-tag-button">
            <FontAwesomeIcon icon={faEllipsis} className="down-arrow" />
          </button>
        </TagConatiner>
        <FilterContainer>
          <Filter />
          <button type="button" className="select-button">
            <label className="sr-only" htmlFor="courses-ordering-type">
              정렬 방식 선택
            </label>
            <select id="courses-ordering-type">
              {orderingTypes.map((type, index) => (
                <option key={type.type + index} value={type.value}>
                  {type.type}
                </option>
              ))}
            </select>
            <DownArrow />
          </button>
        </FilterContainer>
        <div>
          <CourseContainer>
            {dummyCourses.map((lecture, index) => (
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
          </CourseContainer>
        </div>
      </main>
      <Pagination pages={dummyPaginaitonArray} maxPage={MAX_PAGE} />
      {/* </div> */}
    </section>
  );
}

const CategoryNavigation = styled.nav`
  h2 {
    margin-left: 0.75rem;
    font-size: 1.125rem;
    font-weight: 700;
    color: #454545;
  }
`;

const TagConatiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0.5rem 0 1rem 0.75rem;

  .skill-tag {
    background-color: #b8b8b8;
    color: white;
    margin: 0 0.5rem 0.5rem 0;
    padding: 1px 0.6rem 0.125rem 0.8rem;
    border-radius: 4px;
    height: 2em;
    letter-spacing: normal;
    cursor: pointer;
  }

  .more-tag-button {
    padding: 1px 0.6rem;
    background-color: #3298dc;
    font-size: 0.9rem;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 12px 1rem 0.75rem;

  .select-button {
    border: 1px solid #abb0b5;
    /* width: 4.188em; */
    position: relative;
    padding: 0 0.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border-radius: 4px;
  }

  #courses-ordering-type {
    text-align: center;
    font-size: 0.875rem;
    color: #3e4042;
    padding-right: 1.286em;
  }

  .down-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0.5em;
    pointer-events: none;
  }
`;

const CourseContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.5rem;
  row-gap: 0.75rem;
  padding-top: 0.75em;
  margin: 0 0.75em 2rem 0.75rem;

  a {
    width: auto;
    margin: 0;
  }
`;
