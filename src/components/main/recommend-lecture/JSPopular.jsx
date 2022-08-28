import React from 'react';
import { jsPopulars } from './jsPopulars';
import Lecture from './Lecture';
import SlideArrow from './SlideArrow';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function JSPopular() {
  return (
    <section className="lectures">
      <div className="lecture-container-margin">
        <div className="lecture-container-title">
          <a className="lecture-container-title-anchor">
            <h2>
              내가 학습한 <span className="category-name">JavaScript</span> 분야
              인기 강의
            </h2>
            <span className="title-anchor-icon" aria-hidden="true">
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </a>
          <p className="lecture-container-description">
            다양한 프로그래밍 언어 랭킹 조사에서 언제나 상위권을 차지하는
            자바스크립트! 프론트엔드에서 백엔드까지 다양한 영역에서 사용할 수
            있어요.
          </p>
        </div>
        <div className="lecture-wrapper">
          <SlideArrow />
          <ul className="lecture-list">
            {jsPopulars.map(lecture => (
              <Lecture
                key={lecture.title}
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
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
