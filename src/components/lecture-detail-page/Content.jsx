import React from 'react';
import LectureInfo from './LectureInfo';
import LectureSideBar from './LectureSideBar';

export default function Content({ lecture }) {
  return (
    <section>
      <div className="content__lecture-detail">
        <LectureInfo />
        <LectureSideBar lecture={lecture} />
      </div>
    </section>
  );
}
