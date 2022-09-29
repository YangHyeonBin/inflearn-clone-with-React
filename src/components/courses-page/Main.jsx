import React from 'react';
import SearchBar from './SearchBar';
import SkillSearchBar from './SkillSearchBar';
import Filter from './Filter';
import Lecture from '../main-page/recommend-lecture/Lecture';
import { skillTags } from './skillTags';
import { orderingTypes } from './orderingTypes';
import { jsPopulars } from '../main-page/recommend-lecture/jsPopulars';
import { gitPopulars } from '../main-page/recommend-lecture/gitPopulars';
import { similarRoots } from '../main-page/recommend-lecture/similarRoots';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as DownArrow } from '../../assets/down-arrow.svg';
import Pagination from './Pagination';

const MAX_PAGE = 10;

export default function Main() {
  const dummyCourses = jsPopulars.concat(gitPopulars, similarRoots);

  const courseWidth = { width: '13.813rem', margin: 0 };
  const dummyPaginaitonArray = [];

  for (let i = 1; i < 88; i++) {
    dummyPaginaitonArray.push(i);
  }

  return (
    <section>
      <div className="courses-wrapper">
        <header>
          <h2 className="sr-only">전체 카테고리</h2>
          <SearchBar />
        </header>
        <main>
          <nav>
            <h2 className="category-navigation">전체</h2>
          </nav>
          <div className="tag-container__courses">
            <SkillSearchBar />
            {skillTags.map((tag, index) => (
              <button type="button" key={tag + index} className="skill-tag">
                {tag}
              </button>
            ))}
            <button type="button" className="skill-tag more-tag-button">
              <FontAwesomeIcon icon={faEllipsis} />
            </button>
          </div>
          <div className="filter-container">
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
          </div>
          <div>
            <ul className="courses-container">
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
                  smaller={courseWidth}
                />
              ))}
            </ul>
          </div>
        </main>
        <Pagination pages={dummyPaginaitonArray} maxPage={MAX_PAGE} />
      </div>
    </section>
  );
}
