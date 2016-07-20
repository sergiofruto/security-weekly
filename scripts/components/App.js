import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SubscribeForm from './SubscribeForm';
import Article from './Article';

var App = React.createClass({
  render : function() {
    return (
      <div className="container">
        <Header></Header>
        <SubscribeForm></SubscribeForm>       
        <Article></Article>
        <Footer></Footer>
      </div>
    )
  }
});

export default App;