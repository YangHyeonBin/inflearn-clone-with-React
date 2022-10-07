import React from 'react';

import { Link } from 'react-router-dom';

export default function ResultItem({
  title,
  author,
  img,
  keyword,
  keywordIndex,
  filteredTitle,
}) {
  // const resultTitle = title.split(keyword);

  // for (let i = 1; 2 * i - 1 < resultTitle.length; i++) {
  //   let index = 2 * i - 1;
  //   const splicedTitle = resultTitle.splice(index, 0, keyword);
  // }

  // for (const word of resultTitle) {
  //   console.log(`이거임 ${word}`);
  // }
  // console.log(resultTitle);
  // console.log(keyword);
  // console.log(keywordIndexes);

  // const titleArray = title.split(' ');

  // console.log(titleArray);
  const exactKeyword = title.split(' ')[keywordIndex];
  return (
    <li>
      <Link to={`/lecture/${title}`} className="lecture__search-result">
        <img src={img} alt={title} />
        <div className="info-wrapper__search-result">
          <em className="lecture-title__search-result">
            {/* {resultTitle[0] ? (
              <>
                {resultTitle}
                <span className="highlighted__search-result">{keyword}</span>
              </>
            ) : (
              <>
                <span className="highlighted__search-result">{keyword}</span>
                {resultTitle}
              </>
            )} */}
            {/* <span className="highlighted__search-result">{keyword}</span> */}
            {filteredTitle.slice(0, keywordIndex).join(' ')}
            <span className="highlighted__search-result"> {exactKeyword} </span>
            {filteredTitle.slice(keywordIndex).join(' ')}
          </em>
          <p className="author__search-result">{author}</p>
        </div>
      </Link>
    </li>
  );
}
