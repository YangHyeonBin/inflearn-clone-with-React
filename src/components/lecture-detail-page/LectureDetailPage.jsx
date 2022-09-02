import React from 'react';
import { useParams } from 'react-router-dom';

import DetailHeader from './DetailHeader';

import { jsPopulars } from '../main-page/recommend-lecture/jsPopulars';
import MenuBar from './MenuBar';
import Content from './Content';

export default function LectureDetailPage() {
  const { lecture_id } = useParams();

  const currentLecture = jsPopulars[2];
  return (
    <main>
      <DetailHeader lecture={currentLecture} />
      <MenuBar amount={currentLecture.ratingAmount} />
      <Content lecture={currentLecture} />
    </main>
  );
}
