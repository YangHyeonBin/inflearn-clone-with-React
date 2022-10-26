import React from 'react';
import { similarRoots } from './similarRoots';
import Lecture from './Lecture';
import SlideArrow from './SlideArrow copy';

import { mainSectionTitles } from '../mainSectionTitles';
import Wrapper from '../UI/Wrapper';
import Heading from '../UI/Heading';
import LectureBox from '../UI/LectureBox';

export default function SimilarRoot() {
  return (
    <Wrapper>
      <Heading heading={mainSectionTitles[1]} />
      {/* <LectureBox> */}
      <SlideArrow lectures={similarRoots} itemAmount="5">
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
              gif={lecture.gif}
            />
          ))}
        </ul>
      </SlideArrow>
      {/* </LectureBox> */}
    </Wrapper>
  );
}
