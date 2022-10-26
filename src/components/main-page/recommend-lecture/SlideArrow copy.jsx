import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const CONTAINER_WIDTH = 73.75;

export default function SlideArrow({
  lectures,
  itemAmount,
  children,
  roadmapPadding,
}) {
  // const [CONTENTS_WIDTH, setPageWidth] = useState(
  //   (CONTAINER_WIDTH * lectures.length) / itemAmount,
  // );
  const [pageIndex, setPageIndex] = useState(1);
  const [translateValue, setTranslateValue] = useState(0);
  const [rightArrowDisabled, setRightArrowDisabled] = useState(false);
  const [leftArrowDisabled, setLeftArrowDisabled] = useState(true);

  const CONTENTS_WIDTH = (CONTAINER_WIDTH * lectures.length) / itemAmount;

  // useEffect(() => {
  //   setPageWidth((CONTAINER_WIDTH * lectures.length) / itemAmount);
  // }, []);

  const rightArrowClickHandler = () => {
    setPageIndex(pageIndex + 1);
    setLeftArrowDisabled(false);

    if (
      pageIndex === Math.floor(lectures.length / itemAmount) ||
      pageIndex === lectures.length / itemAmount - 1
    ) {
      // setPageIndex(pageIndex + 1);
      setTranslateValue(CONTENTS_WIDTH - CONTAINER_WIDTH);
      setRightArrowDisabled(true);
      // setLeftArrowDisabled(false);
      console.log('마지막 페이지로 갈 때여야 하는 case 2', pageIndex);
      console.log(Math.floor(lectures.length / itemAmount));
    } else {
      // setPageIndex(pageIndex + 1);
      setTranslateValue(pageIndex * CONTAINER_WIDTH);
      // setLeftArrowDisabled(false);
      console.log('마지막 페이지로 가는 것 제외인 case 1', pageIndex);
      console.log(Math.floor(lectures.length / itemAmount));
    }

    // pageIndex < lectures.length / itemAmount - 1
    // if (pageIndex === 1) {
    //   setPageIndex(pageIndex + 1);
    //   setTranslateValue(pageIndex * CONTAINER_WIDTH);
    //   setLeftArrowDisabled(false);
    //   console.log('case 1', pageIndex);
    // } else {
    //   setPageIndex(pageIndex + 1);
    //   setTranslateValue(CONTENTS_WIDTH - CONTAINER_WIDTH);
    //   setRightArrowDisabled(true);
    //   console.log('case 2', pageIndex);
    // }
  };

  const leftArrowClickHandler = () => {
    setPageIndex(pageIndex - 1);
    if (pageIndex <= 2) {
      // setPageIndex(pageIndex - 1);
      setTranslateValue(0);
      setLeftArrowDisabled(true);
      setRightArrowDisabled(false);
      console.log('제일 첫 페이지로 가는 case 3', pageIndex);
    } else {
      // setPageIndex(pageIndex - 1);
      setTranslateValue((pageIndex - 2) * CONTAINER_WIDTH);
      setRightArrowDisabled(false);
      console.log('첫 페이지 아닌 페이지로 가는 case 4', pageIndex);
    }
  };

  // const rightArrowClickHandler = () => {
  //   if (pageIndex < lectures.length / itemAmount - 1) {
  //     setPageIndex(pageIndex + 1);
  //     setTranslateValue(pageIndex * CONTAINER_WIDTH);
  //     setLeftArrowDisabled(false);
  //     console.log('case 1', pageIndex);
  //   } else {
  //     setPageIndex(pageIndex + 1);
  //     setTranslateValue(CONTENTS_WIDTH - CONTAINER_WIDTH);
  //     setRightArrowDisabled(true);
  //     console.log('case 2', pageIndex);
  //   }
  // };

  // const leftArrowClickHandler = () => {
  //   if (pageIndex <= 2) {
  //     setPageIndex(pageIndex - 1);
  //     setTranslateValue(0);
  //     setLeftArrowDisabled(true);
  //     console.log('case 3', pageIndex);
  //   } else {
  //     setPageIndex(pageIndex - 1);
  //     setTranslateValue((pageIndex - 2) * CONTAINER_WIDTH);
  //     setRightArrowDisabled(false);
  //     console.log('case 4', pageIndex);
  //   }
  // };

  return (
    <ArrowBox padding={roadmapPadding}>
      <button
        className={`browse-lecture-list left ${
          leftArrowDisabled && 'disabled'
        }`}
        type="button"
        disabled={leftArrowDisabled}
        aria-label="왼쪽으로 넘기기"
        onClick={leftArrowClickHandler}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        className={`browse-lecture-list right ${
          rightArrowDisabled && 'disabled'
        }`}
        type="button"
        disabled={rightArrowDisabled}
        aria-label="오른쪽으로 넘기기"
        onClick={rightArrowClickHandler}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <div className="container">
        <div
          className="wrapper"
          style={{
            width: `${CONTENTS_WIDTH}rem`,
            transform: `translate(-${translateValue}rem)`,
          }}>
          {children}
        </div>
      </div>
    </ArrowBox>
  );
}

const ArrowBox = styled.div`
  position: relative;
  padding: ${props => (props.padding ? '0.375rem 0' : '0')};

  .container {
    overflow: hidden;
  }

  .wrapper {
    display: flex;
    flex-direction: row;
    /* width: 200%; */
    /* transform: translate(-50%); */
    transition: transform 300ms;
  }
`;
