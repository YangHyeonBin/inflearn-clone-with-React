import React from 'react';
import SideNavBar from '../components/courses-page/SideNavBar';
import Main from '../components/courses-page/Main';

export default function Courses() {
  return (
    <main>
      <div className="courses-page-wrapper">
        <SideNavBar />
        <Main />
      </div>
    </main>
  );
}
