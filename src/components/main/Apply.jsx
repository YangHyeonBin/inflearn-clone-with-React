import React from 'react';
import { applies } from './applies';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Apply() {
  return (
    <section className="apply">
      <div className="apply-wrapper">
        <header className="apply-heading">
          <h2>다양한 서비스를 신청하세요.</h2>
          <p>
            인프런의 지식공유자 '비즈니스' 대학생 신청방법에 대해 알아보세요.
          </p>
        </header>
        <ul className="apply-item-container">
          {applies.map(apply => (
            <li className="apply-item" key={apply.title}>
              <h3>{apply.title}</h3>
              <p>{apply.description}</p>
              <div>
                <a className="apply-item-anchor">
                  {apply.anchor}
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
