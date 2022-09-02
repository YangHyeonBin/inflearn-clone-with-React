import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function SlideArrow() {
  return (
    <>
      <button
        className="browse-lecture-list left"
        type="button"
        aria-label="왼쪽으로 넘기기">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        className="browse-lecture-list right"
        type="button"
        aria-label="오른쪽으로 넘기기">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </>
  );
}
