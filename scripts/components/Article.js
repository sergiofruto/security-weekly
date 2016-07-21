import React from 'react';

const Article = (props) =>
  <article className="article--large">
    <span className="article-top-info">{props.author}</span>
    <h2 className="article-title">{props.title}</h2>
    <img className="article-image" src={props.image} />
    <p className="article-description">{props.description}</p>  
  </article>;

export default Article;