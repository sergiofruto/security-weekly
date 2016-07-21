import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SubscribeForm from './SubscribeForm';
import ArticlesContainer from './ArticlesContainer';

var App = () =>
  <div className="container">
    <Header></Header>
    <SubscribeForm></SubscribeForm>       
    <ArticlesContainer></ArticlesContainer>
    <Footer></Footer>
  </div>;

export default App;