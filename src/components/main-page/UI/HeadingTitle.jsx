import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function HeadingTitle({ heading }) {
  if (heading.title.length === 3) {
    return (
      <a className="title-anchor">
        <h2>
          {heading.title[0]}
          <span className="category-name">{heading.title[1]}</span>
          {heading.title[2]}
        </h2>
        <span className="title-anchor-icon" aria-hidden="true">
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
      </a>
    );
  } else if (heading.title.length === 2) {
    return (
      <a className="title-anchor">
        <h2>
          {heading.title[0]}
          <span className="tag">{heading.title[1]}</span>
        </h2>
        <span className="title-anchor-icon" aria-hidden="true">
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
      </a>
    );
  } else {
    return heading.hasArrow ? (
      <a className="title-anchor">
        <h2>{heading.title}</h2>
        <span className="title-anchor-icon" aria-hidden="true">
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
      </a>
    ) : (
      <h2>{heading.title}</h2>
    );
  }
}
