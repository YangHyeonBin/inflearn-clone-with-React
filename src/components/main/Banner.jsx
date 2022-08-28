import React from 'react';
import { banners } from './banners';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Banner() {
  return (
    <section className="banner">
      <h2 className="sr-only">배너</h2>
      <ul className="banner-container">
        {banners.map(banner => (
          <li
            style={{ backgroundImage: `url(${banner.background}` }}
            key={banner.title}>
            <div className="banner-item-wrapper">
              <a className="banner-item">
                <h3 style={{ color: banner.color }}>{banner.title}</h3>
                <button className="banner-anchor" type="button">
                  {banner.anchor}
                </button>
              </a>
              <div className="banner-swipe-button-container">
                <button className="banner-swipe-button" type="button">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className="banner-swipe-button" type="button">
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
              <div>
                {/* 페이지 표시 부분 나중에 완성하기 */}
                <span></span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
