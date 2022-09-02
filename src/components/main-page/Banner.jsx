import React from 'react';
import { useState } from 'react';

import { banners } from './banners';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Banner() {
  const [bannerPage, setBannerPage] = useState(0);

  const lastPage = -((banners.length - 1) * 100);

  const bannerRightPaginationHandler = () => {
    if (bannerPage === lastPage) {
      setBannerPage(0);
    } else setBannerPage(prevState => prevState - 100);
  };

  const bannerLeftPaginationHandler = () => {
    if (bannerPage === 0) {
      setBannerPage(lastPage);
    } else setBannerPage(prevState => prevState + 100);
  };

  return (
    <section className="banner">
      <h2 className="sr-only">배너</h2>
      <ul
        className="banner-container"
        style={{ transform: `translate(${bannerPage}vw)` }}>
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
                <button
                  className="banner-swipe-button"
                  type="button"
                  aria-label="왼쪽으로 넘기기"
                  onClick={bannerLeftPaginationHandler}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                  className="banner-swipe-button"
                  type="button"
                  aria-label="오른쪽으로 넘기기"
                  onClick={bannerRightPaginationHandler}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
              <div className="banner-pagination-container">
                {banners.map((banner, index) => (
                  <span
                    className="banner-pagination active"
                    onClick={() => setBannerPage(-(index * 100))}
                    key={banner.title}></span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
