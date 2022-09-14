import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function SlideArrow({
  rightArrowClickHandler,
  leftArrowClickHandler,
  rightDisabled,
  leftDisabled,
}) {
  return (
    <>
      <button
        className={`browse-lecture-list left ${leftDisabled && 'disabled'}`}
        type="button"
        disabled={leftDisabled}
        aria-label="왼쪽으로 넘기기"
        onClick={leftArrowClickHandler}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        className={`browse-lecture-list right ${rightDisabled && 'disabled'}`}
        type="button"
        disabled={rightDisabled}
        aria-label="오른쪽으로 넘기기"
        onClick={rightArrowClickHandler}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </>
  );
}
