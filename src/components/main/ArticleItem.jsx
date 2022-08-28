import React from 'react';

export default function ArticleItem({ title, description, img }) {
  return (
    <li>
      <a className="article-item">
        <img src={img} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </li>
  );
}
