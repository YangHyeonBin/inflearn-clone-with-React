import React from 'react';
import SideNavBar from '../components/courses-page/SideNavBar';
import Main from '../components/courses-page/Main';
import Apply from '../components/courses-page/Apply';
import TopButton from '../components/UI/TopButton';

export default function CoursesPage() {
  return (
    <>
      <main>
        <div className="courses-page-wrapper">
          <SideNavBar />
          <Main />
        </div>
      </main>
      <Apply />
      <TopButton />
    </>
  );
}
