import React from 'react';
import ArticlesSample from '../article-sample.json';
import Article from './Article';

const ArticlesContainer = () =>
  <section>
    <h1>Weekly News</h1>
    {ArticlesSample.articles.map((id, author, date, title, image, description) =>
      <Article
        key={id}
        author={author}
        date={date}
        title={title}
        image={image}
        description={description} 
      />
    )}
  </section>

export default ArticlesContainer;