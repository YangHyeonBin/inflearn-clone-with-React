import React from 'react';
import Lecture from './Lecture';
import { newLectures } from './newLectures';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import SlideArrow from './SlideArrow';

export default function New() {
  return (
    <section className="lectures">
      <div className="lecture-container-margin">
        <div className="lecture-container-title">
          <a className="lecture-container-title-anchor">
            <h2>
              따끈따끈, 신규 강의를 만나보세요! 🙋🏻‍♀️{' '}
              <span className="lecture-title-tag">NEW!!</span>
            </h2>
            <span className="title-anchor-icon" aria-hidden="true">
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </a>
        </div>
        <div className="lecture-wrapper">
          <SlideArrow />
          <ul className="lecture-list">
            {newLectures.map(lecture => (
              <Lecture
                key={lecture.title}
                title={lecture.title}
                author={lecture.author}
                originalPrice={lecture.originalPrice}
                currentPrice={lecture.currentPrice}
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
