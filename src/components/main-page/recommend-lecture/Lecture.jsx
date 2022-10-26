import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Rating from '../../rating/Rating';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faPercent, faTicket);

export default function Lecture({
  title,
  author,
  rating,
  ratingAmount,
  originalPrice,
  currentPrice,
  students,
  isNew,
  onDiscount,
  discountTag,
  discountTagIcon,
  discountTagBackground,
  discountTagColor,
  img,
  gif,
}) {
  const discountTagStyle = {
    backgroundColor: discountTagBackground,
    color: discountTagColor,
  };

  return (
    <li>
      <LectureLink to={`/lecture/${title}`}>
        {img && <img className="thumbnail" src={img} alt={title} />}
        {gif && (
          <video className="thumbnail" muted loop autoPlay playsInline>
            <source src={gif} type="video/mp4" />이 비디오를 재생할 수 없는
            브라우저입니다.
          </video>
        )}
        <h3 className="title">{title}</h3>
        <div className="author">{author}</div>
        {rating && <Rating rating={rating} />}
        {ratingAmount && (
          <span className="rating-amount">({ratingAmount})</span>
        )}
        <PriceWrapper>
          {originalPrice && <del>\{originalPrice}</del>}
          {currentPrice === '무료' ? (
            <span className="price">{currentPrice}</span>
          ) : (
            <span className="price">\{currentPrice}</span>
          )}
        </PriceWrapper>
        <TagWrapper>
          {students && (
            <div className="lecture-tag student-amount ">+{students}명</div>
          )}
          {isNew && <span className="lecture-tag new">새강의</span>}
          {onDiscount && <span className="lecture-tag discount">할인중</span>}
        </TagWrapper>
        {discountTag && (
          <DiscountTagWrapper style={discountTagStyle}>
            <FontAwesomeIcon icon={discountTagIcon} />
            <span className="content">{discountTag}</span>
          </DiscountTagWrapper>
        )}
      </LectureLink>
    </li>
  );
}

const LectureLink = styled(Link)`
  display: block;
  width: 14.45em;
  position: relative;
  margin-right: 0.375em;

  .thumbnail {
    display: block;
    width: 14.45em;
    height: 9.375em;
    /* width: 100%; */
    margin-bottom: 0.5em;
  }

  .title {
    font-weight: 700;
    height: 3em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #454545;
  }

  .author {
    color: #7d7d7d;
    font-size: 0.9rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    white-space: nowrap;
  }

  .rating-amount {
    color: #4a4a4a;
    font-size: 0.5rem;
    letter-spacing: normal;
  }
`;

const PriceWrapper = styled.div`
  letter-spacing: normal;
  margin-bottom: 0.5rem;

  del {
    color: #595959;
    font-weight: 500;
    font-size: 0.9rem;
    opacity: 0.75;
    margin-right: 0.25rem;
  }

  .price {
    color: #175cbe;
    font-weight: 700;
  }
`;

const TagWrapper = styled.div`
  color: #454545;
  display: flex;
  font-size: 0.75rem;
  letter-spacing: normal;
  margin-bottom: 0.5rem;

  .lecture-tag {
    border-radius: 4px;
    padding: 0.25em 0.75em;
    margin-right: 0.5rem;
  }

  .lecture-tag:last-child {
    margin-right: 0;
  }

  .student-amount {
    background-color: hsl(321, 63%, 90%);
  }

  .new {
    background-color: hsl(182, 75%, 94%);
  }

  .discount {
    background-color: hsl(1, 100%, 89%);
  }
`;

const DiscountTagWrapper = styled.div`
  position: absolute;
  top: 3%;
  right: 0;
  padding: 0.125rem;
  border: 1px solid white;
  border-right: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: normal;

  .content {
    margin-left: 0.125rem;
  }
`;
