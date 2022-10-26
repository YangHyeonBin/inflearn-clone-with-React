import React from 'react';
import Lecture from './Lecture';
import { newLectures } from './newLectures';
import SlideArrow from './SlideArrow copy';

import { mainSectionTitles } from '../mainSectionTitles';
import Wrapper from '../UI/Wrapper';
import Heading from '../UI/Heading';
import LectureBox from '../UI/LectureBox';

export default function New() {
  return (
    <Wrapper>
      <Heading heading={mainSectionTitles[5]} />
      <SlideArrow lectures={newLectures} itemAmount="5">
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
      </SlideArrow>
    </Wrapper>
  );
}
