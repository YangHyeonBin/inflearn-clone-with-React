import React from 'react';

import DashBoardMain from '../components/dash-board-page/DashBoardMain';
import { navigations } from '../components/dash-board-page/navigations';

export default function DashBoardPage() {
  return (
    <main aria-label="인프런 마이페이지">
      <div className="dash-board-title">
        <h2>대시보드</h2>
      </div>
      <div className="dash-board-container">
        <aside>
          <nav>
            {navigations.map((nav, index) => (
              <React.Fragment key={nav.title + index}>
                <em className="nav-title__dash-board">{nav.title}</em>
                <ul>
                  {nav.contents.map((content, index) => (
                    <li key={content + index}>
                      <a className="nav-item__dash-board">{content}</a>
                    </li>
                  ))}
                </ul>
              </React.Fragment>
            ))}
          </nav>
        </aside>
        <DashBoardMain />
      </div>
    </main>
  );
}
