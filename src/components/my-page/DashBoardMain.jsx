import React from 'react';
import { userInfo } from './userInfo';

import { ReactComponent as CertificateIcon } from '../../assets/icons/certificate-icon.svg';

export default function DashBoardMain() {
  const progress = (
    (userInfo.recentLecture.done / userInfo.recentLecture.amount) *
    100
  ).toFixed(2);

  return (
    <main id="main__dash-board">
      <div className="grid-item__dash-board">
        <header>
          <em>
            <span className="title-icon__dash-board">😀</span>
            {userInfo.name}
            님의 프로필
          </em>
          <span className="anchor-arrow__dash-board">수정하기</span>
        </header>
        <main className="user-profile__dash-board">
          <img
            src="https://cdn.inflearn.com/public/main/profile/default_profile.png"
            alt="인프런 로고"
            className="inflearn-logo__dash-board"
          />
          <span>{userInfo.name}님, 안녕하세요! 👋🏼</span>
        </main>
      </div>
      <div className="grid-item__dash-board">
        <header>
          <em>
            <span className="title-icon__dash-board">📖</span>최근 학습 강의
          </em>
          <span className="anchor-arrow__dash-board">전체 보기</span>
        </header>
        <main className="recent-lecture__dash-board">
          <div className="recent-lecture-title__dash-board">
            {userInfo.recentLecture.title}
          </div>
          <div className="recent-lecture-detail__dash-board">
            <span className="progress__dash-board">
              진도율: {userInfo.recentLecture.done}강/
              {userInfo.recentLecture.amount}강 ({progress}%)
            </span>
            <span className="last-date__dash-board">한 달 전</span>
          </div>
          <progress max="100.00" value={progress}></progress>
          <div className="study-begin-button-wrapper">
            <button type="button" className="study-begin-button">
              이어서 학습하기
            </button>
          </div>
        </main>
      </div>
      <div className="grid-item__dash-board">
        <header>
          <em>
            <span className="title-icon__dash-board">📝</span>최근 내 노트
          </em>
          <span className="anchor-arrow__dash-board">전체 보기</span>
        </header>
        <main className="note__dash-board">
          {userInfo.note ? (
            <div>{userInfo.note}</div>
          ) : (
            <p>
              작성한 노트가 없습니다.
              <br />
              강의를 수강하고 나만의 노트를 작성해 보세요!
            </p>
          )}
        </main>
      </div>
      <div className="grid-item__dash-board">
        <header>
          <em>
            <span className="title-icon__dash-board">🏃🏻</span>학습 통계
          </em>
        </header>
        <main className="study-records__dash-board">
          <div className="record-item__dash-board">
            <p className="record-number__dash-board">
              {userInfo.records.finishedClass}
            </p>
            <p className="record-name__dash-board">완료 강의수</p>
          </div>
          <div className="record-item__dash-board">
            <p className="record-number__dash-board">
              {userInfo.records.finishedLecture}
            </p>
            <p className="record-name__dash-board">완료 수업수</p>
          </div>
          <div className="record-item__dash-board">
            <p className="record-number__dash-board">
              {userInfo.records.certificate}
            </p>
            <p className="record-name__dash-board">획득 수료증</p>
          </div>
        </main>
      </div>
      <div className="grid-item__dash-board">
        <header>
          <em>
            <span className="title-icon__dash-board">🎖</span>스킬 태그
          </em>
        </header>
        <main className="skill-tags__dash-board">
          {userInfo.skillTags.map((tag, index) => (
            <div key={tag + index} className="skill-tag__dash-board">
              <span
                className="skill-tag-name__dash-board"
                style={{ backgroundColor: tag.color }}>
                {tag.name}
              </span>
              <span className="skill-tag-amount__dash-board">{tag.amount}</span>
            </div>
          ))}
        </main>
      </div>
      <div className="grid-item__dash-board">
        <header>
          <em>
            <span className="title-icon__dash-board">🏆</span>수료증
          </em>
          <span className="anchor-arrow__dash-board">전체 보기</span>
        </header>
        <main>
          <div className="certification__dash-board">
            <CertificateIcon />
            <p className="certification-name__dash-board">
              {userInfo.certificate}
            </p>
          </div>
          <div className="code-button-wrapper__dash-board">
            <button type="button" className="code-button__dash-board">
              시리얼코드 확인
            </button>
          </div>
        </main>
      </div>
      <div className="grid-item__dash-board no-padding">
        <header className="has-padding">
          <em>
            <span className="title-icon__dash-board">📚</span>최근 학습중인 강의
          </em>
          <span className="anchor-arrow__dash-board">전체 보기</span>
        </header>
        <main>
          <ul>
            {userInfo.recentLectures.map((lecture, index) => (
              <li key={lecture.title + index}>
                <a className="recent-lecture-item__dash-board">
                  <p className="recent-lecture-item-title__dash-board">
                    {lecture.title}
                  </p>
                  <span className="recent-lecture-item-date__dash-board">
                    한 달 전
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </main>
  );
}
