import './App.css'
import React from 'react';
import Header from './header';
import Body from './body';
import Footer from './footer';

export default class App extends React.Component{
  render() {

    return (
      <article>
        <Header />
        <Body />
        <Footer />
      </article>
    );
  } 
}