import React from 'react';
import { useParams } from 'react-router-dom';

import DetailHeader from '../components/lecture-detail-page/DetailHeader';

// import { jsPopulars } from '../components/main-page/recommend-lecture/jsPopulars';
// import { gitPopulars } from '../components/main-page/recommend-lecture/gitPopulars';
// import { similarRoots } from '../components/main-page/recommend-lecture/similarRoots';
import { allLectures as dummyCourses } from '../assets/dummy-datas/allLectures';
import MenuBar from '../components/lecture-detail-page/MenuBar';
import Content from '../components/lecture-detail-page/Content';

import styled from 'styled-components';

export default function LectureDetailPage() {
  const { title } = useParams(); // 비구조화 할당 이용, useParams 훅이 반환하는 객체 속 title이란 key를 가진 값을 꺼냄

  // const dummyCourses = jsPopulars.concat(gitPopulars, similarRoots);

  // const currentLecture =
  //   dummyCourses[dummyCourses.findIndex(lecture => lecture.title === title)];
  const currentLecture = dummyCourses.find(lecture => lecture.title === title);

  if (!currentLecture) {
    return (
      <ErrorWrapper>
        <p>요청하신 페이지를 찾을 수 없습니다. 주소를 다시 확인해주세요.</p>
      </ErrorWrapper>
    );
  }

  return (
    <main>
      <DetailHeader lecture={currentLecture} />
      <MenuBar amount={currentLecture.ratingAmount} />
      <Content lecture={currentLecture} />
    </main>
  );
}

const ErrorWrapper = styled.section`
  p {
    padding: 3rem;
  }
`;
