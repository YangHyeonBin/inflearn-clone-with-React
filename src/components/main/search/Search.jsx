import React from 'react';
import { tags } from './tags';
import Tag from './Tag';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Search() {
  return (
    <section>
      <h2 className="sr-only">검색창</h2>
      <div className="search">
        <p className="title__search">배우고, 나누고, 성장하세요</p>
        <div className="search-bar">
          <input type="text" placeholder="배우고 싶은 지식을 입력해보세요." />
          <button type="button">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
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
