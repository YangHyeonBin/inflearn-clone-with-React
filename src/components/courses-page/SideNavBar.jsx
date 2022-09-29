import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import { sideNavBars } from './sideNavBars';

export default function SideNavBar() {
  const [clickedTitle, setClickedTitle] = useState(-1);

  return (
    <SideNavBarWrapper>
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
              {/* <div
              className={`category-title ${menu.children ? 'with-arrow' : ''}`}
              isClicked={index === clickedTitle}
              onClick={() =>
                index === clickedTitle
                  ? setClickedTitle(-1)
                  : setClickedTitle(index)
              }> */}
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
    </SideNavBarWrapper>
  );
}

const SideNavBarWrapper = styled.aside`
  line-height: 1.25;
  width: 12.25rem;
  color: #595959;

  /* .category-title {
  }

  .category-title.with-arrow::after {
    content: '';
    display: inline-block;
    margin-top: 0.125rem;
    margin-left: 0.65rem;
    border: solid #595959;
    border-width: 0 0.125rem 0.125rem 0;
    padding: 0.156rem;
    transform: ${props =>
    props.isClicked ? 'rotate(45deg)' : 'rotate(-45deg)'};
    transition: transform 0.2s;
  } */
`;
