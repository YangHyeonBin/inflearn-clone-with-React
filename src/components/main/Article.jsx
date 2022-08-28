import React from 'react';

import { articles } from './articles';
import ArticleItem from './ArticleItem';

import { mainSectionTitles } from './mainSectionTitles';
import Wrapper from './UI/Wrapper';
import Heading from './UI/Heading';

export default function Article() {
  return (
    <Wrapper>
      <Heading heading={mainSectionTitles[6]} />
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
    </Wrapper>
  );
}
