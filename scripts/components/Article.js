import React from 'react';

const Article = (props) => 
  <article className="article">
    <div className="article-text-content">
      <span className="article-top-info">{props.author} - {props.date}</span>
      <h2 className="article-title">{props.title}</h2>
    </div>    
    <img className="article-image" src={props.image} />
    <p className="article-description">{props.description}</p>  
  </article>;

export default Article;