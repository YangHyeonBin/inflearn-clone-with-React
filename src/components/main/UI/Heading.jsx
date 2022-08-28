import React from 'react';

import HeadingDescription from './HeadingDescription';
import HeadingArrow from './HeadingArrow';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Heading({ heading }) {
  if (heading.description) {
    return (
      <div className="lecture-container-title">
        <a className="lecture-container-title-anchor">
          <HeadingDescription heading={heading} />
          <span className="title-anchor-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </a>
        <p className="lecture-container-description">{heading.description}</p>
      </div>
    );
  } else if (heading.hasArrow) {
    return (
      <div className="lecture-container-title">
        <a className="lecture-container-title-anchor">
          <HeadingArrow heading={heading} />
          <span className="title-anchor-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </a>
      </div>
    );
  } else {
    return <h2 className="lecture-container-title">{heading.title}</h2>;
  }
}
