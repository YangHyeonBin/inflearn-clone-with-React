import React from 'react';
import { ReactComponent as Dot } from '../../assets/dot-icon.svg';
import { ReactComponent as FilterIcon } from '../../assets/filter-icon.svg';

export default function Filter() {
  return (
    <button type="button" className="filter-container-left">
      <div className="filter-icon">
        <FilterIcon />
        <span className="filter-icon-letter">필터</span>
      </div>
      <div className="price-filter">
        유료
        <Dot />
        무료
        <Dot />
        할인중
      </div>
      <div className="level-filter">
        입문
        <Dot />
        초급
        <Dot />
        중급이상
      </div>
    </button>
  );
}
