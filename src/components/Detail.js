import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

class Detail extends Component {
    render() {
      return (
        <div class="container">

    
        <h1 class="mt-4 mb-3">Item 1
          
        </h1>
  
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li class="breadcrumb-item active">Portfolio Item</li>
        </ol>
  
        <div class="row">
  
          <div class="col-md-8">
            <img class="img-fluid" src="http://placehold.it/750x500" alt=""/>
          </div>
  
          <div class="col-md-4">
            <h3 class="my-3">Project Description</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
            <h3 class="my-3">Project Details</h3>
            <ul>
              <li>Lorem Ipsum</li>
              <li>Dolor Sit Amet</li>
              <li>Consectetur</li>
              <li>Adipiscing Elit</li>
            </ul>
            <button> Buy</button>
          </div>
  </div>
        </div>
    );
}
}

export default Detail;