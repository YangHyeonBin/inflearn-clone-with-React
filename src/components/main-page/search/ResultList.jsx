import React from 'react';

import ResultItem from './ResultItem';

export default function ResultList({
  keyword,
  keywordIndexes,
  filteredResult,
  filteredTitles,
}) {
  // const filteredResult = dataList.filter(lecture =>
  //   lecture.title
  //     .replace(' ', '')
  //     .toLowerCase()
  //     .includes(keyword.replace(' ', '').toLowerCase()),
  // );

  return (
    <ul>
      <h3>강의</h3>
      {filteredResult.map((result, index) => (
        <ResultItem
          key={Math.random()}
          title={result.title}
          filteredTitle={filteredTitles[index]}
          author={result.author}
          img={result.img}
          keyword={keyword}
          keywordIndex={keywordIndexes[index]}
        />
      ))}
    </ul>
  );
}
