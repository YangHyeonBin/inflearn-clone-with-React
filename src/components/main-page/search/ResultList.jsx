import React from 'react';

import ResultItem from './ResultItem';

export default function ResultList({ keyword, filteredResult }) {
  // const filteredResult = dataList.filter(lecture =>
  //   lecture.title
  //     .replace(' ', '')
  //     .toLowerCase()
  //     .includes(keyword.replace(' ', '').toLowerCase()),
  // );

  return (
    <ul>
      <h3>강의</h3>
      {filteredResult.map(result => (
        <ResultItem
          key={Math.random()}
          title={result.title}
          author={result.author}
          img={result.img}
          keyword={keyword}
        />
      ))}
    </ul>
  );
}
