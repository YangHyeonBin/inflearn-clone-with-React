import React from 'react';

import { ReactComponent as Arrow } from '../../assets/right-arrow.svg';
import { ReactComponent as AuthorIcon } from '../../assets/person-icon.svg';
import { ReactComponent as Crown } from '../../assets/crown-icon.svg';
import { ReactComponent as HashTag } from '../../assets/hash-tag-icon.svg';
import { ReactComponent as PlayIcon } from '../../assets/play-icon.svg';
import Rating from '../rating/Rating';

export default function DetailHeader({ lecture }) {
  return (
    <section className="lecture-detail-header">
      <div className="detail-header-wrapper">
        <div className="thumbnail-container__detail-header">
          <div className="thumbnail-content__detail-header">
            {lecture.img && <img src={lecture.img} alt={lecture.title} />}
            {lecture.gif && (
              <video muted loop autoPlay playsInline>
                <source src={lecture.gif} type="video/mp4" />이 비디오를 재생할
                수 없는 브라우저입니다.
              </video>
            )}
            <div className="free-watch-button">
              <button type="button">
                <PlayIcon />
                <span className="free-watch-amount">12개</span> 무료 보기
              </button>
            </div>
          </div>
        </div>
        <div className="description-container__detail-header">
          <div className="description__detail-header">
            <div className="tag__detail-header">BEST</div>
            <span className="category__detail-header">
              개발 · 프로그래밍 <Arrow /> 프로그래밍 언어
            </span>
          </div>
          <h2>{lecture.title}</h2>
          {lecture.rating && (
            <div className="rating-container">
              <span className="rating">
                <Rating rating={lecture.rating} />
                <span className="rating-score">({lecture.ratingScore})</span>
              </span>
              <span>{lecture.ratingAmount}개의 수강평</span>
              &nbsp;∙&nbsp;
              <span>
                <span className="highlight-students">{lecture.students}명</span>
                의 수강생
              </span>
            </div>
          )}
          <div className="author">
            <span className="author-icon">
              <AuthorIcon />
            </span>
            <a className="name">{lecture.author}</a>
            <Crown />
          </div>
          <div className="hash-tags">
            <span className="hash-tag-icon">
              <HashTag />
            </span>
            {lecture.hashTag &&
              lecture.hashTag.map(tag => (
                <a className="hash-tag" key={tag}>
                  {tag}
                </a>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
