import React from 'react';
import { gitPopulars } from './gitPopulars';
import Lecture from './Lecture';
import SlideArrow from './SlideArrow copy';

import { mainSectionTitles } from '../mainSectionTitles';
import Wrapper from '../UI/Wrapper';
import Heading from '../UI/Heading';
import LectureBox from '../UI/LectureBox';

export default function GitPopular() {
  return (
    <Wrapper>
      <Heading heading={mainSectionTitles[3]} />
      <SlideArrow lectures={gitPopulars} itemAmount="5">
        <ul className="lecture-list">
          {gitPopulars.map((lecture, index) => (
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
            />
          ))}
        </ul>
      </SlideArrow>
    </Wrapper>
  );
}
