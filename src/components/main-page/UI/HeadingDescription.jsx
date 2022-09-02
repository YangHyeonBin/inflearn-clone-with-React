import React from 'react';

export default function HeadingDescription({ heading }) {
  if (heading.title.length === 3) {
    return (
      <h2>
        {heading.title[0]}
        <span className="category-name">{heading.title[1]}</span>
        {heading.title[2]}
      </h2>
    );
  } else if (heading.title.length === 2) {
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
