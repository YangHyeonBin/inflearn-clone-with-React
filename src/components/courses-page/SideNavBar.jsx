import React from 'react';
import { useState } from 'react';

import { sideNavBars } from './sideNavBars';

export default function SideNavBar() {
  const [clickedTitle, setClickedTitle] = useState(-1);

  return (
    <aside className="side-nav-bar">
      <nav>
        <h2 className="sr-only">분야별 강의 찾기</h2>
        {sideNavBars.map((menu, index) => (
          <React.Fragment key={menu.title + index}>
            <div
              className={`category-title ${menu.children ? 'with-arrow' : ''} ${
                index === clickedTitle ? 'clicked' : ''
              }`}
              onClick={() =>
                index === clickedTitle
                  ? setClickedTitle(-1)
                  : setClickedTitle(index)
              }>
              {menu.title}
            </div>
            {menu.children &&
              menu.children.map((child, index) => (
                <div
                  key={index + Math.random()}
                  className={`category-contents ${
                    clickedTitle === menu.index ? 'show' : ''
                  }`}>
                  <a className="category-detail">{child}</a>
                </div>
              ))}
          </React.Fragment>
        ))}
      </nav>
    </aside>
  );
}
