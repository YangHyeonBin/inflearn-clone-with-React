import React from 'react';
import { useState } from 'react';

import { sideNavBars } from './sideNavBars';

export default function SideNavBar() {
  const [clicked, setClicked] = useState(false);

  const titleClickHandler = () => {
    setClicked(!clicked);
    console.log(clicked);
  };

  return (
    <aside className="side-nav-bar">
      <nav>
        <h2 className="sr-only">분야별 강의 찾기</h2>
        {sideNavBars.map((menu, index) => (
          <React.Fragment key={menu.title + index}>
            <div
              className={`category-title ${menu.children ? 'with-arrow' : ''} ${
                clicked ? 'clicked' : ''
              }`}
              onClick={titleClickHandler}>
              {menu.title}
            </div>
            {menu.children &&
              menu.children.map((child, index) => (
                <div key={index + Math.random()}>
                  <a className="category-detail">{child}</a>
                </div>
              ))}
          </React.Fragment>
        ))}
      </nav>
    </aside>
  );
}
