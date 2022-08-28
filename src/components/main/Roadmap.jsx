import React from 'react';
import { roadmaps } from './roadmaps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import RoadmapItem from './RoadmapItem';
import SlideArrow from './recommend-lecture/SlideArrow';

export default function Roadmap() {
  return (
    <section className="lectures">
      <div className="lecture-container-margin">
        <div className="lecture-container-title">
          <a className="lecture-container-title-anchor">
            <h2>
              기본부터 실무까지 제시해주는 로드맵 🏃🏻‍♀️{' '}
              <span className="lecture-title-tag">RoadMap!!</span>
            </h2>
            <span className="title-anchor-icon" aria-hidden="true">
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </a>
          <p className="lecture-container-description">
            아무것도 몰라도 따라오다 보면 전문가가 될 수 있어요!
          </p>
        </div>
        <div className="lecture-wrapper roadmap">
          <SlideArrow />
          <ul className="roadmap-container">
            {roadmaps.map(roadmap => (
              <RoadmapItem
                key={roadmap.title}
                img={roadmap.img}
                title={roadmap.title}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
