import React from 'react';
import styled from 'styled-components';

import { roadmaps } from './roadmaps';
import RoadmapItem from './RoadmapItem';
import SlideArrow from './recommend-lecture/SlideArrow copy';

import { mainSectionTitles } from './mainSectionTitles';
import Wrapper from './UI/Wrapper';
import Heading from './UI/Heading';

export default function Roadmap() {
  return (
    <Wrapper>
      <Heading heading={mainSectionTitles[7]} />
      <SlideArrow lectures={roadmaps} itemAmount="4" roadmapPadding={true}>
        <RoadmapWrapper>
          {roadmaps.map(roadmap => (
            <RoadmapItem
              key={roadmap.title}
              img={roadmap.img}
              title={roadmap.title}
            />
          ))}
        </RoadmapWrapper>
      </SlideArrow>
    </Wrapper>
  );
}

const RoadmapWrapper = styled.ul`
  display: flex;
`;
