import React from 'react';
import SlideArrow from '../recommend-lecture/SlideArrow';

export default function LectureBox(props) {
  return (
    <div className="lecture-wrapper">
      <SlideArrow />
      {props.children}
    </div>
  );
}
