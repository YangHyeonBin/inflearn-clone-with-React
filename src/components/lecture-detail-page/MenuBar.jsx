import React from 'react';
import { menuBarItems } from './menuBarItems';

export default function MenuBar({ amount }) {
  return (
    <nav className="menu-bar__lecture-detail">
      <ul className="menu-container__lecture-detail">
        <li className="active">강의소개</li>
        <li>커리큘럼</li>
        <li>
          수강평
          <span className="review-amount__menu-bar">{amount}</span>
        </li>
        <li>커뮤니티</li>
        <li>새소식</li>
      </ul>
    </nav>
  );
}
