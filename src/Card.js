import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="CardDeck">
        <div class="card bg-dark text-white border-warning border-3">
          <img class="card-img" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg">
          <p class="card-text">Thresh.</p>
        </div>
      </div>
    );
  }
}

export default Card;
