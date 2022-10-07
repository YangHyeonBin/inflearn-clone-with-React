import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons';
import { faListUl } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faRoad } from '@fortawesome/free-solid-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

export default function MobileNavBar() {
  return (
    <MobileNavBarWrapper>
      <h2 className="sr-only">메뉴 선택</h2>
      <ul>
        <li>
          <a>
            <FontAwesomeIcon icon={faChalkboardUser} className="icon" />
            <h3>대시보드</h3>
          </a>
        </li>
        <li>
          <a>
            <FontAwesomeIcon icon={faListUl} className="icon" />
            <h3>강의</h3>
          </a>
        </li>
        <li className="active">
          <a>
            <FontAwesomeIcon icon={faHouse} className="icon" />
            <h3>홈</h3>
          </a>
        </li>
        <li>
          <a>
            <FontAwesomeIcon icon={faRoad} className="icon" />
            <h3>로드맵</h3>
          </a>
        </li>
        <li>
          <a>
            <FontAwesomeIcon icon={faEllipsis} className="icon" />
            <h3>더보기</h3>
          </a>
        </li>
      </ul>
    </MobileNavBarWrapper>
  );
}

const MobileNavBarWrapper = styled.nav`
  height: 4.125em;
  width: 100vw;
  box-shadow: 0 -2px 4px 0 rgb(33 37 41 / 8%);
  background-color: white;
  color: #495057;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;

  ul {
    display: flex;
    height: 4.125em;
  }

  li {
    flex: 1 1 0;
    padding: 0.5em;
    height: 4.125em;
  }

  li.active {
    color: #00c471;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .icon {
    width: 1.5em;
    height: 1.625em;
  }

  h3 {
    font-size: 0.75rem;
  }
`;
