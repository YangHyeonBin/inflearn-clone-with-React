import React from 'react';
import { useParams } from 'react-router-dom';

import DetailHeader from '../components/lecture-detail-page/DetailHeader';

import { jsPopulars } from '../components/main-page/recommend-lecture/jsPopulars';
import MenuBar from '../components/lecture-detail-page/MenuBar';
import Content from '../components/lecture-detail-page/Content';

export default function LectureDetailPage() {
  const { title } = useParams(); // 비구조화 할당 이용, useParams 훅이 반환하는 객체 속 title이란 key를 가진 값을 꺼냄
  console.log(title);

  const currentLecture = jsPopulars[2];
  return (
    <main>
      <DetailHeader lecture={currentLecture} />
      <MenuBar amount={currentLecture.ratingAmount} />
      <Content lecture={currentLecture} />
    </main>
  );
}
