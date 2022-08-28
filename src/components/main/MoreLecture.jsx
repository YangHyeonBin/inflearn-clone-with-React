import React from 'react';
import SlideArrow from './recommend-lecture/SlideArrow';
import { moreLectures } from './moreLectures';

import { mainSectionTitles } from './mainSectionTitles';
import Wrapper from './UI/Wrapper';
import Heading from './UI/Heading';

export default function MoreLecture() {
  return (
    <Wrapper>
      <Heading heading={mainSectionTitles[4]} />
      <div className="container__more-lectures">
        <SlideArrow />
        {moreLectures.map(lecture => (
          <a className="card__more-lectures" key={lecture.title}>
            <div
              className="icon__more-lectures"
              style={{
                backgroundPosition: lecture.backgroundPosition,
              }}></div>
            <div>{lecture.title}</div>
          </a>
        ))}
      </div>
    </Wrapper>
  );
}
