import React from 'react';

export default function Loading() {
  return (
    <div className="logo-wrapper__loading" aria-label="검색 결과 로드 중">
      <img
        src="https://cdn.inflearn.com/assets/brand/brand_logo2.png"
        alt="인프런 로고"
        className="logo__loading"
      />
    </div>
  );
}
