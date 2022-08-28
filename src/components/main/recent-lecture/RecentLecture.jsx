import React from 'react';
import { recentLectures } from './recentLectures';
import RecentLectureItem from './RecentLectureItem';

import { mainSectionTitles } from '../mainSectionTitles';
import Wrapper from '../UI/Wrapper';
import Heading from '../UI/Heading';

export default function RecentLecture() {
  return (
    <Wrapper>
      <Heading heading={mainSectionTitles[0]} />
      <ul className="recent-lectures">
        {recentLectures.map(lecture => (
          <RecentLectureItem
            key={lecture.title}
            title={lecture.title}
            term={lecture.term}
            progress={lecture.progress}
            img={lecture.img}
          />
        ))}
      </ul>
    </Wrapper>
  );
}
