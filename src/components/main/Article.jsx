import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { articles } from './articles';
import ArticleItem from './ArticleItem';

export default function Article() {
  return (
    <section className="lectures">
      <div className="lecture-container-margin">
        <div className="lecture-container-title">
          <a className="lecture-container-title-anchor">
            <h2>읽어보기</h2>
            <span className="title-anchor-icon" aria-hidden="true">
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </a>
        </div>
        <div className="article-container-wrapper">
          <ul className="article-container">
            {articles.map(article => (
              <ArticleItem
                key={article.title}
                title={article.title}
                description={article.description}
                img={article.img}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
