import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

class Footer extends Component {
    render() {
      return (
        
    <div className="container">

        <div className="row"><center>
            <h3 className="footertext">Our Customers : </h3></center>
            
              <div className="col-md-4">
                <center>
                  <img src="http://oi60.tinypic.com/w8lycl.jpg" className="img-circle" alt="the-brains"/>
                  
                  <h4 className="footertext">Andy</h4>
                  <p className="footertext">Best Website Ever!</p>
                </center>
              </div>
              <div className="col-md-4">
                <center>
                  <img src="http://oi60.tinypic.com/2z7enpc.jpg" className="img-circle" alt="..."/>
    
                  <h4 className="footertext">Ben</h4>
                  <p className="footertext">Easy to use and fast respond!</p>
                </center>
              </div>
              <div className="col-md-4">
                <center>
                  <img src="http://oi61.tinypic.com/307n6ux.jpg" className="img-circle" alt="..."/>
                
                  <h4 className="footertext">Charles</h4>
                  <p className="footertext">This pretty site and the copy it holds are all thanks to this guy.</p>
                </center>
              </div>
            </div>
           
    </div>
   
      );
    }
  }

  export default Footer;