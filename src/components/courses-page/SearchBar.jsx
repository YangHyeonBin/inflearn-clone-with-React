import React from 'react';

export default function SearchBar() {
  return (
    <section>
      <h2 className="sr-only">검색창</h2>
      <form>
        <input type="text" placeholder="강의 검색하기" />
        <button>검색</button>
      </form>
    </section>
  );
}
