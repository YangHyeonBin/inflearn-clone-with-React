import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function SkillSearchBar() {
  return (
    <form>
      <input type="text" placeholder="기술검색" />
      <button>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </form>
  );
}
