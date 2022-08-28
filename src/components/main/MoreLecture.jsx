import React from 'react';
import SlideArrow from './recommend-lecture/SlideArrow';
import { moreLectures } from './moreLectures';

export default function MoreLecture() {
  return (
    <section className="lectures">
      <div className="lecture-container-margin">
        <h2 className="title__more-lectures">더 둘러보기</h2>
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
      </div>
    </section>
  );
}
