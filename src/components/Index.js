import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';


class Index extends Component {
    render() {
      return (
<div>
<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
  
  <ol class="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
  </ol>

 
  <div class="carousel-inner" role="listbox">
    <div class="item active">
      <img src="./image/benz.jpg" alt="..."/>
      <div class="carousel-caption">
        ...
      </div>
    </div>
    <div class="item">
      <img src="./image/benz.jpg" alt="..."/>
      <div class="carousel-caption">
        ...
      </div>
    </div>
    <div class="item">
      <img src="./image/benz.jpg" alt="..."/>
      <div class="carousel-caption">
        ...
      </div>
    </div>

  </div>

  
  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>  
 <div className="allcontain">
 <div className="featuredsection">
     <h1 className="text-center"><span className="bdots">FEATURES CARS</span></h1>
 </div>
 <div className="featuredimage">
     <div className="row firstrow">
         <div className="col-sm-6 cosumcol colborder1">
             <div className="row costumerow">
                 <div className="col-sm-6 img1colon">
                     <img className="img-fluid" src="https://picsum.photos/280/400/?random" alt="porche"/>
                 </div>
                 <div className="col-sm-6 txt1colon">
                     <div className="featurecontant">
                         <h1>Lorem Ipsum</h1>
                         <p>Lorem ipsum dolor sit amet</p>
                         <h2>Price </h2>
                         <button id="btnRM">Read More</button>
                     </div>
                 </div>
             </div>
         </div>
         <div className="row secondrow">
         <div className="col-sm-6 cosumcol colborder1">
             <div className="row costumerow">
                 <div className="col-xs-12 col-sm-6 col-md-6 img1colon">
                     <img className="img-fluid" src="https://picsum.photos/280/400/?random" alt="porche"/>
                 </div>
                 <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 txt1colon">
                     <div className="featurecontant">
                         <h1>Lorem Ipsum</h1>
                         <p>Lorem ipsum dolor sit amet</p>
                         <h2>Price </h2>
                         <button id="btnRM">Read More</button>
                     </div>
                 </div>
             </div>
         </div>
     </div>
        </div>
 </div>

</div>
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

</div>


      );
    }
  }
  
  export default Index;
  