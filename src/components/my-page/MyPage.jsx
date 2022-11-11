import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { navigations } from './navigations';

export default function DashBoardPage(props) {
  return (
    <MyPageWrapper aria-label="인프런 마이페이지">
      <div className="my-page-title">
        <h2>{props.title}</h2>
      </div>
      <MyPageMain>
        <aside>
          <nav>
            {navigations.map((nav, index) => (
              <React.Fragment key={nav.title + index}>
                <em className="nav-title">{nav.title}</em>
                <ul>
                  {nav.contents.map((content, index) => (
                    <li key={content.title + index}>
                      <Link
                        to={content.link}
                        className={`nav-item ${
                          props.title === content.title ? 'active' : ''
                        }`}>
                        {content.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </React.Fragment>
            ))}
          </nav>
        </aside>
        {props.children}
      </MyPageMain>
    </MyPageWrapper>
  );
}

const MyPageWrapper = styled.main`
  .my-page-title {
    padding: 0.5rem 0;
    background-color: rgb(52, 58, 64);
  }

  .my-page-title h2 {
    padding: 0 2rem;
    margin: 0 auto;
    max-width: 75rem;
    color: white;
    font-size: 1.625rem;
    font-weight: 700;
    line-height: 1.35;
  }
`;

const MyPageMain = styled.div`
  width: 75rem;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 5fr;

  aside {
    padding-right: 0.625rem;
  }

  .nav-title {
    display: block;
    color: rgb(173, 181, 189);
    font-size: 0.75rem;
    margin-bottom: 1em;
    line-height: 1.55;
  }

  .nav-item {
    display: block;
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
  }

  .nav-item:hover {
    background-color: #f1f3f5;
  }

  .nav-item.active {
    background-color: rgb(229, 249, 241);
    color: rgb(0, 196, 113);
  }

  .nav-item.active:hover {
    background-color: rgb(215, 249, 235);
  }

  li:last-child {
    margin-bottom: 0.5rem;
  }
`;
