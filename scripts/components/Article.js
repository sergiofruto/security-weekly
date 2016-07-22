import React from 'react';

const Article = (props) => 
  <article>
    <a className="article-wrapper" href="#">
      <div className="article-text-content">
        <span className="article-top-info">{props.author} - {props.date}</span>
        <h2 className="article-title">{props.title}</h2>
      </div>    
      <img className="article-image" src={props.image} />
      <p className="article-description">{props.description}</p>  
    </a>
  </article>;

export default Article;