import { useState } from 'react';

import { swiperContents } from './swiperContents';
import SwipeItem from './SwipeItem';
import SwipePaginationIndex from './SwipePaginationIndex';
import SwipePaginationButtons from './SwipePaginationButtons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Swiper() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [clicked, setClicked] = useState(false);

  const maxSlide = -((swiperContents.length - 1) * 100);

  const rightArrowClickHandler = () => {
    if (currentSlide === maxSlide) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(prevState => prevState - 100);
    }
  };

  const leftArrowClickHandler = () => {
    if (currentSlide === 0) {
      setCurrentSlide(maxSlide);
    } else {
      setCurrentSlide(prevState => prevState + 100);
    }
  };

  return (
    <section className="swiper">
      <h2 className="sr-only">진행 중인 이벤트</h2>
      <ul
        className="swipe-items"
        style={{ transform: `translate(${currentSlide}vw)` }}>
        {swiperContents.map(content => (
          <SwipeItem
            key={content.keyword}
            keyword={content.keyword}
            title={content.title}
            description={content.description}
            tag={content.tag}
            img={content.img}
            background={content.background}
            fontColor={content.fontColor}
            tagColor={content.tagColor}
            tagBackground={content.tagBackground}
          />
        ))}
      </ul>
      <div className="swipe-pagination-wrapper">
        <div className="swipe-pagination-grid-wrapper">
          <SwipePaginationIndex
            length={swiperContents.length}
            rightArrowClickHandler={rightArrowClickHandler}
            leftArrowClickHandler={leftArrowClickHandler}
          />
          <ul className="swipe-pagination-button-container">
            {swiperContents.map((content, index) => (
              <SwipePaginationButtons
                key={content.keyword}
                keyword={content.keyword}
                clicked={clicked}
                paginationButtonClickHandler={() => {
                  setCurrentSlide(-(index * 100));
                  setClicked(true);
                }}
              />
            ))}
          </ul>
          <button
            type="button"
            aria-label="더 보기"
            className="see-more__swipe">
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      </div>
    </section>
  );
}
