import React from 'react';

import { ReactComponent as ArrowIcon } from '../../assets/auth-right-arrow.svg';
import { ReactComponent as FolderIcon } from '../../assets/folder-icon.svg';
import { ReactComponent as HeartIcon } from '../../assets/heart.svg';
import { ReactComponent as ShareIcon } from '../../assets/share-icon.svg';

export default function LectureSideBar({ lecture }) {
  return (
    <div className="lecture-side-bar-wrapper">
      <aside className="lecture-side-bar">
        <div className="auth-button-wrapper">
          <button className="auth-button">
            <img
              src="https://cdn.inflearn.com/assets/images/corporations/musinsa.png"
              alt="무신사"
            />
            <div className="auth-info">
              <div className="title-container">
                <h3>무신사</h3>
                <div className="auth-icon">
                  <span>인증</span>
                  <ArrowIcon />
                </div>
              </div>
              <p className="auth-desc">
                지금 이 회사에 <span className="highlight">관심있는</span>{' '}
                사람들도 듣는 중!
              </p>
            </div>
          </button>
        </div>
        <div className="lecture-info-wrapper__side-bar">
          <div className="info-wrapper-top__side-bar">
            <div className="price__side-bar">{lecture.currentPrice}원</div>
            <div>
              <div className="payment-related-button-container">
                <button className="coupon" type="button">
                  10% 쿠폰 받기 (3개)
                </button>
                <button className="register" type="button">
                  수강신청 하기
                </button>
                <button className="add-to-cart" type="button">
                  바구니에 담기
                </button>
              </div>
              <div>
                <button type="button">
                  <FolderIcon />
                  폴더에 추가
                </button>
                <button type="button">
                  <HeartIcon />
                  {lecture.likes}
                </button>
                <button type="button">
                  <ShareIcon />
                  공유
                </button>
              </div>
            </div>
          </div>
          <ul>
            <li>
              지식공유자: <a>{lecture.author}</a>
            </li>
            <li>
              총 {lecture.totalLectureAmount}개 수업 ({lecture.totalRunningTime}
              )
            </li>
            <li>수강기한: {lecture.term}</li>
            <li>수료증: {lecture.certificate}</li>
            <li>
              난이도: 입문 <span>- 초급 -</span> 중급이상
            </li>
          </ul>
          <div>지식공유자 답변이 제공되는 강의입니다.</div>
        </div>
      </aside>
    </div>
  );
}
