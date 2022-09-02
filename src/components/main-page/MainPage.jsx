import React from 'react';
import Swiper from './swipe/Swiper';
import Search from './search/Search';
import RecentLecture from './recent-lecture/RecentLecture';
import SimilarRoot from './recommend-lecture/SimilarRoot';
import JSPopular from './recommend-lecture/JSPopular';
import GitPopular from './recommend-lecture/GitPopular';
import MoreLecture from './MoreLecture';
import New from './recommend-lecture/New';
import Article from './Article';
import Roadmap from './Roadmap';
import Banner from './Banner';
import Apply from './Apply';

export default function MainPage() {
  return (
    <main>
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
    </main>
  );
}
