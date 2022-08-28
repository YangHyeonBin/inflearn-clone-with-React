import React from 'react';

export default function RoadmapItem({ title, img }) {
  return (
    <li className="roadmap-item">
      <a>
        <img src={img} alt={title} />
        <h3>{title}</h3>
      </a>
    </li>
  );
}
