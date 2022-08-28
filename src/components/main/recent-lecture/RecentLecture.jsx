import React from 'react';
import { recentLectures } from './recentLectures';
import RecentLectureItem from './RecentLectureItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function RecentLecture() {
  return (
    <section className="recent-lecture-container">
      <div className="recent-lecture-container-margin">
        <div className="title-section__lecture-container">
          <a href="#" className="title-wrapper__lecture-container">
            <h2 className="title__lecture-container">나의 최근 학습 강의</h2>
            <span aria-hidden="true">
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </a>
        </div>
        <ul>
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
      </div>
    </section>
  );
}
