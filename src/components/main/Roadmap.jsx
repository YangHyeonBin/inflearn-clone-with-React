import React from 'react';
import { roadmaps } from './roadmaps';
import RoadmapItem from './RoadmapItem';
import SlideArrow from './recommend-lecture/SlideArrow';

import { mainSectionTitles } from './mainSectionTitles';
import Wrapper from './UI/Wrapper';
import Heading from './UI/Heading';

export default function Roadmap() {
  return (
    <Wrapper>
      <Heading heading={mainSectionTitles[7]} />
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
    </Wrapper>
  );
}
