import React, { Component } from 'react';
import {Link, Route } from 'react-router-dom';

class Header extends Component {
    render() {
      return (
<nav classNameName="navbar navbar-inverse navbar-fixed-top">
        <div classNameName="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed navbar-default" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle Navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
                <form className="navbar-form navbar-left">
                    
                    <input type="text" className="form-control" placeholder="Search..."/>
                </form>    
            <ul className="nav navbar-nav navbar-right">
                <li><Link to ="/#">Home</Link></li>
                <li><Link to ="/detail">About us</Link></li>
                <li className="dropdown">
                <Link to="/product" className = "dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"> Products <span className="caret"> </span> </Link> 
                <ul className="dropdown-menu" role="menu">
                    <li><Link to="/product">All Products</Link></li>
                    <li><Link to="/product">New Products</Link></li>
                    <li><Link to="/product">Best sellers</Link></li>
                </ul>
                <Route path="/detail" component="Detail"/>
            </li>
        </ul>
    </div>
    </div>
</nav>
        
    
      );
    }
}  
      
  
  export default Header;