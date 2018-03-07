import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import axios from 'axios'   


class Product extends Component {
    render() {
      return (
        <div>
            <div className="row">
            <div>
                <div id="onclik()">
                <div className="thumbnail">
                <h4>{this.props.nama}</h4>
                <p>{this.props.deskripsi}</p>
                <p>{this.props.harga}
                <button type="button" className="btn btn-warning btn-sm notif"> Beli </button>
                <button type="button" className="btn btn-success btn-sm">Detail</button></p>
                </div>
                <img src={this.props.gambar} className="img-responsive"/>
                </div>
            </div>
            </div>
        </div>
    

    );
}
}

export default Product;