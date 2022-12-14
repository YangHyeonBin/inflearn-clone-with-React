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
            <span className="title-icon__dash-board">π</span>
            {userInfo.name}
            λμ νλ‘ν
          </em>
          <span className="anchor-arrow__dash-board">μμ νκΈ°</span>
        </header>
        <main className="user-profile__dash-board">
          <img
            src="https://cdn.inflearn.com/public/main/profile/default_profile.png"
            alt="μΈνλ° λ‘κ³ "
            className="inflearn-logo__dash-board"
          />
          <span>{userInfo.name}λ, μλνμΈμ! ππΌ</span>
        </main>
      </div>
      <div className="grid-item__dash-board">
        <header>
          <em>
            <span className="title-icon__dash-board">π</span>μ΅κ·Ό νμ΅ κ°μ
          </em>
          <span className="anchor-arrow__dash-board">μ μ²΄ λ³΄κΈ°</span>
        </header>
        <main className="recent-lecture__dash-board">
          <div className="recent-lecture-title__dash-board">
            {userInfo.recentLecture.title}
          </div>
          <div className="recent-lecture-detail__dash-board">
            <span className="progress__dash-board">
              μ§λμ¨: {userInfo.recentLecture.done}κ°/
              {userInfo.recentLecture.amount}κ° ({progress}%)
            </span>
            <span className="last-date__dash-board">ν λ¬ μ </span>
          </div>
          <progress max="100.00" value={progress}></progress>
          <div className="study-begin-button-wrapper">
            <button type="button" className="study-begin-button">
              μ΄μ΄μ νμ΅νκΈ°
            </button>
          </div>
        </main>
      </div>
      <div className="grid-item__dash-board">
        <header>
          <em>
            <span className="title-icon__dash-board">π</span>μ΅κ·Ό λ΄ λΈνΈ
          </em>
          <span className="anchor-arrow__dash-board">μ μ²΄ λ³΄κΈ°</span>
        </header>
        <main className="note__dash-board">
          {userInfo.note ? (
            <div>{userInfo.note}</div>
          ) : (
            <p>
              μμ±ν λΈνΈκ° μμ΅λλ€.
              <br />
              κ°μλ₯Ό μκ°νκ³  λλ§μ λΈνΈλ₯Ό μμ±ν΄ λ³΄μΈμ!
            </p>
          )}
        </main>
      </div>
      <div className="grid-item__dash-board">
        <header>
          <em>
            <span className="title-icon__dash-board">ππ»</span>νμ΅ ν΅κ³
          </em>
        </header>
        <main className="study-records__dash-board">
          <div className="record-item__dash-board">
            <p className="record-number__dash-board">
              {userInfo.records.finishedClass}
            </p>
            <p className="record-name__dash-board">μλ£ κ°μμ</p>
          </div>
          <div className="record-item__dash-board">
            <p className="record-number__dash-board">
              {userInfo.records.finishedLecture}
            </p>
            <p className="record-name__dash-board">μλ£ μμμ</p>
          </div>
          <div className="record-item__dash-board">
            <p className="record-number__dash-board">
              {userInfo.records.certificate}
            </p>
            <p className="record-name__dash-board">νλ μλ£μ¦</p>
          </div>
        </main>
      </div>
      <div className="grid-item__dash-board">
        <header>
          <em>
            <span className="title-icon__dash-board">π</span>μ€ν¬ νκ·Έ
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
            <span className="title-icon__dash-board">π</span>μλ£μ¦
          </em>
          <span className="anchor-arrow__dash-board">μ μ²΄ λ³΄κΈ°</span>
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
              μλ¦¬μΌμ½λ νμΈ
            </button>
          </div>
        </main>
      </div>
      <div className="grid-item__dash-board no-padding">
        <header className="has-padding">
          <em>
            <span className="title-icon__dash-board">π</span>μ΅κ·Ό νμ΅μ€μΈ κ°μ
          </em>
          <span className="anchor-arrow__dash-board">μ μ²΄ λ³΄κΈ°</span>
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
                    ν λ¬ μ 
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
