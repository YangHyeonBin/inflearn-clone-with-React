import React from 'react';
import { useState, useEffect } from 'react';

import { tags } from './tags';
import Tag from './Tag';
import ResultList from './ResultList';
import Loading from './Loading';
import { jsPopulars } from '../recommend-lecture/jsPopulars';
import { gitPopulars } from '../recommend-lecture/gitPopulars';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Search() {
  const [keyword, setKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [filteredResult, setFilteredResult] = useState([]);

  const dataList = jsPopulars.concat(gitPopulars);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      const filteredData = dataList.filter(lecture =>
        lecture.title
          .replace(' ', '')
          .toLowerCase()
          .includes(keyword.replace(' ', '').toLowerCase()),
      );

      setFilteredResult(filteredData);
      setIsLoading(false);
    }, 2000);
  }, [keyword]);

  const inputChangeHandler = e => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  return (
    <section>
      <h2 className="sr-only">검색창</h2>
      <div className="search">
        <p className="title__search">배우고, 나누고, 성장하세요</p>
        <div
          className={`search-bar-wrapper ${
            keyword && filteredResult.length > 0 ? 'search-active' : ''
          }`}>
          <form className="search-bar">
            <input
              type="text"
              placeholder="배우고 싶은 지식을 입력해보세요."
              onChange={inputChangeHandler}
            />
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
          <div className="search-result-container">
            {isLoading ? (
              <Loading />
            ) : (
              <ResultList filteredResult={filteredResult} keyword={keyword} />
            )}
          </div>
        </div>
        <ul className="tag-container" aria-label="인기 태그 10선">
          {tags.map(tag => (
            <Tag key={tag.tag} tag={tag.tag} />
          ))}
        </ul>
      </div>
    </section>
  );
}
