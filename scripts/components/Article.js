var React = require('react');

const Article = () =>
  <article className="article--large">
    <span className="article-top-info">John Doe - 09 July 2015</span>
    <h2 className="article-title">How a Paypal Account was Hacked Using Social Engeneering</h2>
    <img className="article-image" src="https://auth0.com/lib/customers/img/logo-safari-books.svg" />
    <p className="article-description">Brian Krebs discovered that on Christmas Eve his PayPal account was hacked, not due to a compromised password, but because the attacker called customer support to reset the password.</p>  
  </article>;

export default Article;