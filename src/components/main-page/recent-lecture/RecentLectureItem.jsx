import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function RecentLectureItem({ title, term, progress, img }) {
  return (
    <li key={title}>
      <a className="recent-lecture-item" href="#">
        <img className="recent-lecture-thumbnail" src={img} alt={title} />
        <div className="container__recent-lecture-description">
          <h3>{title}</h3>
          <div className="wrapper__recent-lecture-description">
            <div className="wrapper__recent-lecture-desc-left">
              <div className="recent-lecture-info">
                <span>기한: {term}</span>
                <div className="divider">|</div>
                <span>진도율: {progress}%</span>
              </div>
              <progress max="100" value={progress}></progress>
            </div>
            <button className="anchor__play-recent-lecture">
              바로 학습
              <FontAwesomeIcon icon={faPlay} className="play-icon" />
            </button>
          </div>
        </div>
      </a>
    </li>
  );
}
