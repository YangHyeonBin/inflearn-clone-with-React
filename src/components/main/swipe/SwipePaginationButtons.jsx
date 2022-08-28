import React from 'react';

export default function SwipePaginationButtons({ keyword }) {
  return (
    <li key={keyword}>
      <button type="button">{keyword}</button>
    </li>
  );
}
