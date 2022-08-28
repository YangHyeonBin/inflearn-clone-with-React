import React from 'react';
import { similarRoots } from './similarRoots';
import Lecture from './Lecture';
import SlideArrow from './SlideArrow';

export default function SimilarRoot() {
  return (
    <section className="lectures">
      <div className="lecture-container-margin">
        <h2 className="lecture-container-title">
          나와 비슷한 사람들이 수강한 강의
        </h2>
        <div className="lecture-wrapper">
          <SlideArrow />
          <ul className="lecture-list">
            {similarRoots.map(lecture => (
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
