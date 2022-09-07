import React from 'react';
import { useState } from 'react';

import { banners } from './banners';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

export default function Banner() {
  const [bannerPage, setBannerPage] = useState(0);

  const [leftButtonDisabled, setLeftButtonDisabled] = useState(false);
  const [rightButtonDisabled, setRightButtonDisabled] = useState(false);

  const lastPage = -((banners.length - 1) * 100);

  const bannerRightPaginationHandler = () => {
    setBannerPage(prevState => prevState - 100);
  };

  const bannerLeftPaginationHandler = () => {
    setBannerPage(prevState => prevState + 100);
  };

  useEffect(() => {
    if (bannerPage === lastPage) {
      setRightButtonDisabled(true);
    } else {
      setRightButtonDisabled(false);
    }

    if (bannerPage === 0) {
      setLeftButtonDisabled(true);
    } else {
      setLeftButtonDisabled(false);
    }
  }, [bannerPage, lastPage]);

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
                  className={`banner-swipe-button ${
                    leftButtonDisabled ? 'banner-swipe-button--disabled' : ''
                  }`}
                  type="button"
                  aria-label="왼쪽으로 넘기기"
                  onClick={bannerLeftPaginationHandler}
                  disabled={leftButtonDisabled}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                  className={`banner-swipe-button ${
                    rightButtonDisabled ? 'banner-swipe-button--disabled' : ''
                  }`}
                  type="button"
                  aria-label="오른쪽으로 넘기기"
                  onClick={bannerRightPaginationHandler}
                  disabled={rightButtonDisabled}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
              <div className="banner-pagination-container">
                {banners.map((banner, index) => (
                  <span
                    className={`banner-pagination ${
                      bannerPage === -(index * 100)
                        ? 'banner-pagination--active'
                        : ''
                    }`}
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
