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
import { ReactComponent as Dot } from '../../assets/dot-icon.svg';
import { ReactComponent as DownArrow } from '../../assets/down-arrow.svg';

export default function Main() {
  const dummyCourses = jsPopulars.concat(gitPopulars, similarRoots);
  const dummyPaginaitonArray = [];

  for (let i = 0; i < 86; i++) {
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
            <h2>전체</h2>
          </nav>
          <div>
            <SkillSearchBar />
            {skillTags.map((tag, index) => (
              <button type="button" key={tag + index}>
                {tag}
              </button>
            ))}
            <button type="button">
              <FontAwesomeIcon icon={faEllipsis} />
            </button>
          </div>
          <div>
            <button type="button">
              <div>
                <Filter />
                필터
              </div>
              <div>
                유료
                <Dot />
                무료
                <Dot />
                할인중
              </div>
              <div>
                입문
                <Dot />
                초급
                <Dot />
                중급이상
              </div>
            </button>
            <button type="button">
              <label className="sr-only" htmlFor="courses-ordering-type">
                정렬 방식 선택
              </label>
              <select className="courses-ordering-type">
                {orderingTypes.map((type, index) => (
                  <option key={type.type + index} value={type.value}>
                    {type.type}
                  </option>
                ))}
              </select>
              <span>
                <DownArrow />
              </span>
            </button>
          </div>
          <div>
            <ul>
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
                />
              ))}
            </ul>
          </div>
        </main>
        <footer>
          <nav>
            {dummyPaginaitonArray.map(page => (
              <button type="button" key={page}>
                {page + 1}
              </button>
            ))}
            <button type="button">다음 페이지</button>
          </nav>
        </footer>
      </div>
    </section>
  );
}
