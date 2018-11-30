import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Card extends Component {
  props:{
    'dataImgSrc':string,
    'name':string
  }
  render() {
    return (
      <div className="CardDeck">
        <div className="card bg-dark text-white border-warning border-3">
          <img className="card-img" data-img-src={this.props.dataImgSrc}>
          <p className="card-text">{name}</p>
        </div>
      </div>
    );
  }
}

export default Card;
