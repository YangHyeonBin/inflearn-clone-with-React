import React from 'react';

export default function HeadingArrow({ heading }) {
  if (heading.title.length === 2) {
    return (
      <h2>
        {heading.title[0]}
        <span className="lecture-title-tag">{heading.title[1]}</span>
      </h2>
    );
  } else {
    return <h2>{heading.title}</h2>;
  }
}
