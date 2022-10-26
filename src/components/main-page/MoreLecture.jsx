import React from 'react';
import SlideArrow from './recommend-lecture/SlideArrow copy';
import { moreLectures } from './moreLectures';

import { mainSectionTitles } from './mainSectionTitles';
import Wrapper from './UI/Wrapper';
import Heading from './UI/Heading';
import { useState } from 'react';
import { useEffect } from 'react';

export default function MoreLecture() {
  // const [pageWidth, setPageWidth] = useState(73.75);
  // const [pageIndex, setPageIndex] = useState(1);
  // const [translateValue, setTranslateValue] = useState(0);
  // const [rightArrowDisabled, setRightArrowDisabled] = useState(false);
  // const [leftArrowDisabled, setLeftArrowDisabled] = useState(true);

  // useEffect(() => {
  //   setPageWidth((73.75 * moreLectures.length) / 6);
  // }, []);

  // const rightArrowClickHandler = () => {
  //   if (pageIndex < moreLectures.length / 6 - 1) {
  //     setPageIndex(pageIndex + 1);
  //     setTranslateValue(pageIndex * 73.75);
  //     setLeftArrowDisabled(false);
  //   } else {
  //     setPageIndex(pageIndex + 1);
  //     setTranslateValue(pageWidth - 73.75);
  //     setRightArrowDisabled(true);
  //   }
  // };

  // const leftArrowClickHandler = () => {
  //   if (pageIndex <= 2) {
  //     setPageIndex(pageIndex - 1);
  //     setTranslateValue(0);
  //     setLeftArrowDisabled(true);
  //   } else {
  //     setPageIndex(pageIndex - 1);
  //     setTranslateValue((pageIndex - 2) * 73.75);
  //     setRightArrowDisabled(false);
  //   }
  // };

  return (
    <Wrapper>
      <Heading heading={mainSectionTitles[4]} />
      <SlideArrow lectures={moreLectures} itemAmount="6">
        {moreLectures.map(lecture => (
          <a className="card__more-lectures" key={lecture.title}>
            <div
              className="icon__more-lectures"
              style={{
                backgroundPosition: lecture.backgroundPosition,
              }}></div>
            <div>{lecture.title}</div>
          </a>
        ))}
      </SlideArrow>
      {/* <div className="arrow-parent__more-lectures">
        <SlideArrow
          rightArrowClickHandler={rightArrowClickHandler}
          leftArrowClickHandler={leftArrowClickHandler}
          rightDisabled={rightArrowDisabled}
          leftDisabled={leftArrowDisabled}
        />
        <div className="container__more-lectures">
          <div
            className="wrapper__more-lectures"
            style={{
              width: `${pageWidth}rem`,
              transform: `translate(-${translateValue}rem)`,
            }}>
            {moreLectures.map(lecture => (
              <a className="card__more-lectures" key={lecture.title}>
                <div
                  className="icon__more-lectures"
                  style={{
                    backgroundPosition: lecture.backgroundPosition,
                  }}></div>
                <div>{lecture.title}</div>
              </a>
            ))}
          </div>
        </div>
      </div> */}
    </Wrapper>
  );
}
