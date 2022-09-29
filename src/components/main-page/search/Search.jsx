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
  const [filteredTitles, setFilteredTitles] = useState([]);
  const [keywordIndexes, setKeywordIndexes] = useState([]);

  const dataList = jsPopulars.concat(gitPopulars);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      // const titles = dataList.map(data => data.title.toLowerCase().split(' '));
      // const titleArrayDatas = dataList.map(
      //   // (data, index) => (data.title = titles[index]),
      //   data => console.log(data.title),
      // );

      // const filteredData = titleArrayDatas.filter(lecture =>
      //   lecture.title.some(
      //     title => title === keyword.toLowerCase().split(' ', ''),
      //   ),
      // );

      // .replace(' ', '')

      // console.log(filteredData);

      const filteredData = dataList.filter(lecture =>
        lecture.title
          .replace(' ', '')
          .toLowerCase()
          .includes(keyword.replace(' ', '').toLowerCase()),
      );

      const filteredTitles = filteredData.map(lecture =>
        lecture.title.split(' '),
      );

      setFilteredTitles(filteredTitles);

      const keywordIndexes = filteredTitles.map(title =>
        title
          .map(item => item.toLowerCase().indexOf(keyword.toLowerCase()))
          .indexOf(0),
      );

      setKeywordIndexes(keywordIndexes);
      // console.log(keywordIndexes);

      // 제목에서 키워드 제거하고 하이라이트 클래스 가진 span 요소 키워드로 바꿔치기 하기
      filteredTitles.map((title, index) =>
        title.splice(keywordIndexes[index], 1),
      );

      // console.log(filteredTitles);

      // const result = [...filteredData].map(
      //   (data, index) => (data.title = filteredTitles[index]),
      // );

      // const result = [...filteredData];

      // result.map((data, index) => (data.title = filteredTitles[index]));

      // console.log(result);

      // const findAllIndex = () => {
      // const keywordIndexes = [];
      // let keywordIndex = filteredData.map(lecture =>
      //   lecture.title
      //     .replace(' ', '')
      //     .toLowerCase()
      //     .indexOf(keyword.replace(' ', '').toLowerCase()),
      // );

      // console.log(keywordIndex);

      // while (keywordIndex !== -1) {
      //   keywordIndex = filteredData.map(lecture =>
      //     lecture.title
      //       .replace(' ', '')
      //       .toLowerCase()
      //       .indexOf(keyword.replace(' ', '').toLowerCase(), keywordIndex),
      //   );
      //   keywordIndexes.push(keywordIndex);
      // }

      // console.log(keywordIndexes);

      // return keywordIndexes;
      // };

      // findAllIndex();

      setFilteredResult(filteredData);
      setIsLoading(false);
    }, 2000);
  }, [keyword]);

  const inputChangeHandler = e => {
    e.preventDefault();
    setKeyword(e.target.value);
    // console.log(filteredResult.map(lecture => lecture.title.indexOf(keyword)));
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
              <ResultList
                filteredResult={filteredResult}
                filteredTitles={filteredTitles}
                keyword={keyword}
                keywordIndexes={keywordIndexes}
              />
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
