import React from 'react';

export default function SearchBar() {
  return (
    <section className="search-bar__courses">
      <h2 className="sr-only">검색창</h2>
      <form className="search-bar-container__courses">
        <input
          type="text"
          placeholder="강의 검색하기"
          className="search-bar-input__courses"
        />
        <button className="search-button__courses">검색</button>
      </form>
    </section>
  );
}
