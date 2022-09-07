import React from 'react';

import { jsPopulars } from '../recommend-lecture/jsPopulars';

export default function ResultList() {
  const lectureTitles = [jsPopulars.map(lecture => lecture.title)];
  const filteredResult = [
    lectureTitles.filter(title => title.includes('ES6+')),
  ];

  console.log(lectureTitles);
  console.log(filteredResult);

  return (
    <div>
      <ul>
        {filteredResult.map(result => (
          <li key={Math.random()}>{result}</li>
        ))}
      </ul>
    </div>
  );
}
