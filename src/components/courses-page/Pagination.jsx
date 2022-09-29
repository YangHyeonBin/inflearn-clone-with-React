import React, { useState } from 'react';
import { useEffect } from 'react';

export default function Pagination({ pages, maxPage }) {
  const [firstPage, setFirstPage] = useState(0);
  const [lastPage, setLastPage] = useState(maxPage);
  const [currentPage, setCurrentPage] = useState(1);

  let showingPages = pages.slice(firstPage, lastPage);

  useEffect(() => {
    showingPages = pages.slice(firstPage, lastPage);
  }, [firstPage, lastPage]);

  const prevPageClickHandler = () => {
    if (currentPage === pages.length) {
      console.log(pages.length);
      console.log(Math.floor((pages.length - maxPage) / maxPage) * maxPage);
      setFirstPage(Math.floor((pages.length - maxPage) / maxPage) * maxPage);
      setLastPage(Math.floor(pages.length / maxPage) * maxPage);
    } else {
      setFirstPage(firstPage - maxPage);
      setLastPage(lastPage - maxPage);
    }
    console.log(firstPage);
    setCurrentPage(firstPage);
  };

  const nextPageClickHandler = () => {
    setFirstPage(lastPage);
    setLastPage(lastPage + maxPage);
    setCurrentPage(firstPage + 11);
  };

  const pageButtonClickHandler = e => {
    setCurrentPage(Number(e.target.textContent));
  };

  const firstPageClickHandler = () => {
    setFirstPage(0);
    setLastPage(maxPage);
    setCurrentPage(1);
  };

  const lastPageClickHandler = () => {
    setFirstPage(Math.floor(pages.length / maxPage) * maxPage);
    setLastPage(pages.length);
    setCurrentPage(pages.length);
  };

  const onePageBeforeClickHandler = () => {
    setCurrentPage(currentPage - 1);
  };

  const onePageAfterClickHandler = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <footer className="pagination__courses">
      <nav>
        {currentPage > 1 && (
          <button
            type="button"
            className="next-page-button"
            onClick={onePageBeforeClickHandler}>
            이전 페이지
          </button>
        )}
        {currentPage > maxPage && (
          <>
            <button
              type="button"
              className="page-button"
              onClick={firstPageClickHandler}>
              {pages[0]}
            </button>
            <button
              type="button"
              className="page-button"
              onClick={prevPageClickHandler}>
              ...
            </button>
          </>
        )}
        {showingPages.map(page => (
          <button
            type="button"
            key={page}
            className={`page-button ${page === currentPage ? 'active' : ''}`}
            onClick={pageButtonClickHandler}>
            {page}
          </button>
        ))}
        {currentPage <= Math.floor(pages.length / maxPage) * maxPage && (
          <>
            <button
              type="button"
              className="page-button"
              onClick={nextPageClickHandler}>
              ...
            </button>
            <button
              type="button"
              className={`page-button ${
                currentPage === pages.length ? 'active' : ''
              }`}
              onClick={lastPageClickHandler}>
              {pages[pages.length - 1]}
            </button>
          </>
        )}
        {currentPage !== pages.length && (
          <button
            type="button"
            className="next-page-button"
            onClick={onePageAfterClickHandler}>
            다음 페이지
          </button>
        )}
      </nav>
    </footer>
  );
}
