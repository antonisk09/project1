import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

import Index from './components/Index.js';
import Product from './components/Product.js';
// import About from './components/about.js';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Detail from './components/Detail.js';

import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <div>
      <div>
      <nav>
      <Header/>
      </nav>
      </div>
      <div>
      <Route exact path="/" component={Index}/>
      <Route path ="/Detail" component={Detail}/>
      <Route path="/Product" component={Product}/>
        
        </div>
        
        
      
      </div>

    );
  }
}

export default App;
