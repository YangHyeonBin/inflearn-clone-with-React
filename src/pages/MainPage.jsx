import React from 'react';
import styled from 'styled-components';

import Swiper from '../components/main-page/swipe/Swiper';
import Search from '../components/main-page/search/Search';
import RecentLecture from '../components/main-page/recent-lecture/RecentLecture';
import SimilarRoot from '../components/main-page/recommend-lecture/SimilarRoot';
import JSPopular from '../components/main-page/recommend-lecture/JSPopular';
import GitPopular from '../components/main-page/recommend-lecture/GitPopular';
import MoreLecture from '../components/main-page/MoreLecture';
import New from '../components/main-page/recommend-lecture/New';
import Article from '../components/main-page/Article';
import Roadmap from '../components/main-page/Roadmap';
import Banner from '../components/main-page/Banner';
import Apply from '../components/main-page/Apply';

export default function MainPage() {
  return (
    <MainWrapper>
      <Swiper />
      <Search />
      <RecentLecture />
      <SimilarRoot />
      <JSPopular />
      <GitPopular />
      <MoreLecture />
      <New />
      <Article />
      <Roadmap />
      <Banner />
      <Apply />
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  overflow-y: hidden;
`;
