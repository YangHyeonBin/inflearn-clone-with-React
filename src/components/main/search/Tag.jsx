import React from 'react';

export default function Tag({ tag }) {
  return (
    <li key={tag}>
      <a href="#">{tag}</a>
    </li>
  );
}
