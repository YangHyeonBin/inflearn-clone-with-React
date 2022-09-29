import React from 'react';
import styled from 'styled-components';

import { navFooters } from './navFooters';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function FooterNav() {
  const [clickedTitle, setClickedTitle] = useState(-1);

  return (
    <Nav>
      {navFooters.map((nav, index) => (
        <li className="nav-item" key={nav.title + index}>
          <div
            className="title"
            onClick={() =>
              index === clickedTitle
                ? setClickedTitle(-1)
                : setClickedTitle(index)
            }>
            <h3>{nav.title}</h3>
            <button type="button" className="view-button">
              <FontAwesomeIcon
                icon={clickedTitle === -1 ? faAngleDown : faAngleUp}
              />
            </button>
          </div>
          <NavContents open={clickedTitle === index}>
            {nav.contents.map(content => (
              <a className="nav-content-item" key={content}>
                {content}
              </a>
            ))}
          </NavContents>
        </li>
      ))}
    </Nav>
  );
}

const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 2em 1.25em;
  border-bottom: 1px solid #444;

  .nav-item {
    font-size: 0.875rem;
    line-height: 1.43;
    margin-right: 1.25rem;
  }

  .title {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    color: #eee;
    font-weight: 700;
  }

  .view-button {
    display: none;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: normal;
    padding: 0.625em 1.25em 0;
    border-bottom: none;

    .nav-item {
      margin-right: 0;
      border-bottom: 1px solid #434a54;
    }

    .nav-item:nth-child(n + 4) {
      display: none;
    }

    .view-button {
      display: block;
    }
  }
`;

const NavContents = styled.div`
  display: flex;
  flex-direction: column;

  .nav-content-item {
    color: #bdbdbd;
    margin-bottom: 0.438rem;
  }

  @media screen and (max-width: 768px) {
    max-height: ${props => (props.open ? '100%' : '0px')};
    margin-bottom: ${props => (props.open ? '1.063rem' : '0')};
    overflow-y: hidden;
    transition: margin-bottom 0.2s ease-in-out;
  }
`;
