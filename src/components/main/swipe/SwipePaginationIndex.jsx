import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function SwipePaginationIndex() {
  return (
    <div className="swipe-pagination-controller">
      <span className="swipe-pagination-index">
        <span>3</span>/<span>11</span>
      </span>
      <div className="swipe-page-control-button-container">
        <button type="button" aria-label="왼쪽으로 넘기기">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button type="button" aria-hidden="true">
          <FontAwesomeIcon icon={faPlay} />
        </button>
        <button type="button" aria-label="오른쪽으로 넘기기">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}
