import React from 'react';
import { Link } from 'react-router-dom';

import Rating from '../../rating/Rating';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faPercent, faTicket);

export default function Lecture({
  lecture_id,
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
}) {
  const discountTagStyle = {
    backgroundColor: discountTagBackground,
    color: discountTagColor,
  };

  return (
    <li>
      <Link to={`/lecture/${lecture_id}`} className="lecture-item">
        <img className="lecture-thumbnail" src={img} alt={title} />
        <h3 className="lecture-title">{title}</h3>
        <div className="lecture-author">{author}</div>
        <Rating rating={rating} />
        {ratingAmount && (
          <span className="lecture-rating-amount">({ratingAmount})</span>
        )}
        <div className="lecture-price-wrapper">
          {originalPrice && <del>\{originalPrice}</del>}
          <span className="lecture-price">\{currentPrice}</span>
        </div>
        <div className="lecture-tag-container">
          {students && (
            <div className="student-amount-tag lecture-tag">+{students}명</div>
          )}
          {isNew && <span className="new-lecture-tag lecture-tag">새강의</span>}
          {onDiscount && (
            <span className="discount-lecture-tag lecture-tag">할인중</span>
          )}
        </div>
        {discountTag && (
          <div className="discount-tag-wrapper" style={discountTagStyle}>
            <FontAwesomeIcon icon={discountTagIcon} />
            <span className="discount-tag-content">{discountTag}</span>
          </div>
        )}
      </Link>
    </li>
  );
}
