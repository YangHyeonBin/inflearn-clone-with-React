import React from 'react';
import { gitPopulars } from './gitPopulars';
import Lecture from './Lecture';
import SlideArrow from './SlideArrow';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function GitPopular() {
  return (
    <section className="lectures">
      <div className="lecture-container-margin">
        <div className="lecture-container-title">
          <a className="lecture-container-title-anchor">
            <h2>
              내가 학습한 <span className="category-name">Git</span> 분야 인기
              강의
            </h2>
            <span className="title-anchor-icon" aria-hidden="true">
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </a>
          <p className="lecture-container-description">
            아무리 좋은 코드를 짜도 관리가 안 된다면 소용없겠죠? 버전 관리를
            위한 개발자의 필수 도구, 깃(Git)을 통해 복잡한 코드도 편리하게
            관리해 보세요!
          </p>
        </div>
        <div className="lecture-wrapper">
          <SlideArrow />
          <ul className="lecture-list">
            {gitPopulars.map(lecture => (
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
