import React from 'react';
import { useState } from 'react';

export default function SwipePaginationButtons({
  keyword,
  paginationButtonClickHandler,
  clicked,
}) {
  return (
    <li key={keyword} className={clicked ? 'active' : ''}>
      <button type="button" onClick={paginationButtonClickHandler}>
        {keyword}
      </button>
    </li>
  );
}
