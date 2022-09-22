import React from 'react';
import { useEffect } from 'react';

export default function NotFound({ setIsNotFound }) {
  useEffect(() => {
    setIsNotFound(true);
  }, []);

  return (
    <div className="wrapper__not-found">
      <div className="message__not-found">
        <h1>해당 페이지를 찾지 못했습니다.</h1>
        <p>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</p>
        <p className="go-to-main">메인페이지로 이동 🏠🏃🏻‍♀</p>
      </div>
      <img
        className="coding-cat"
        src="https://cdn.inflearn.com/assets/images/lost_pages/coding_cat.gif"
        alt="coding cat"
      />
      <img
        className="inflearn-stamp"
        src="https://cdn.inflearn.com/assets/brand/dojang.png"
        alt="인프런 도장"
      />
    </div>
  );
}
