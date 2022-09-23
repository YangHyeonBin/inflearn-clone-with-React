import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function SkillSearchBar() {
  return (
    <form className="skill-search-bar">
      <input
        type="text"
        placeholder="기술검색"
        className="skill-search-bar-input"
      />
      <button className="skill-search-button">
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </form>
  );
}
