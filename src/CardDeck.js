import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card,{Component} from './Card.js'

class CardDeck extends Component {
  props{
    'strChamp':string,
    nbCard:int
  }
  render() {
    return (
      <div className="CardDeck">
      <section class="card-columns ">
      //add 6 Card
      </section>
      </div>
    );
  }
}

export default CardDeck;
