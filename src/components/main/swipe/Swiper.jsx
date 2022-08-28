import { swiperContents } from './swiperContents';
import SwipeItem from './SwipeItem';
import SwipePaginationIndex from './SwipePaginationIndex';
import SwipePaginationButtons from './SwipePaginationButtons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Swiper() {
  return (
    <section>
      <h2 className="sr-only">진행 중인 이벤트</h2>
      <ul>
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
          <SwipePaginationIndex />
          <ul className="swipe-pagination-button-container">
            {swiperContents.map(content => (
              <SwipePaginationButtons
                key={content.keyword}
                keyword={content.keyword}
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
