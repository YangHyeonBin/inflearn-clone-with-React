import React from 'react';
import styled from 'styled-components';

import { jsPopulars } from '../../main-page/recommend-lecture/jsPopulars';
import { dummyCurriculum } from './dummyCurriculum';

const lecture = jsPopulars[2];

// 함수 만들기 (순수한 배열을 반환하는)

export default function Curriculum() {
  return (
    <CurriculumWrapper>
      <header>
        <strong>커리큘럼</strong>총 {lecture.totalLectureAmount}개 ˙{' '}
        {lecture.totalRunningTime}의 수업
      </header>
      <div>
        <p>
          이 강의는 영상, 수업 노트가 제공됩니다. 미리보기를 통해 콘텐츠를
          확인해보세요.
        </p>
        <button type="button">모두 접기</button>
      </div>
      <div>
        {dummyCurriculum.map((curri, index) => (
          <div key={curri.title + index}>
            <div>
              <em>
                섹션 {index}. {curri.title}
              </em>
              <span>
                {curri.lectureItem.length} 강 ∙{' '}
                {curri.lectureItem.reduce((sum, length) => sum + length, 0)}분
              </span>
            </div>
          </div>
        ))}
      </div>
    </CurriculumWrapper>
  );
}

const CurriculumWrapper = styled.section`
  color: #333;
`;
