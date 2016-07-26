import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SubscribeForm from './SubscribeForm';
import ArticlesContainer from './ArticlesContainer';
import Navigation from './Navigation';

var App = () =>
  <div className="container">
    <Header></Header>
    <SubscribeForm></SubscribeForm>       
    <ArticlesContainer></ArticlesContainer>
    <Navigation></Navigation>
    <Footer></Footer>
  </div>;

export default App;