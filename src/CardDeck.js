import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card.js'

class CardDeck extends Component {
  constructor(props){
    super(props);
    this.state = {
			error: null,
			isLoaded: false,
			champions: [],
			secondCardFlipped: null,
			firstCardFlipped: null
		};
  }

  render() {
    const {error, isLoaded, champions} = this.state;

    let cards = this.generateCards(champions);
    return (
      <div className="CardDeck">
      <section className="row" classID="board">
      					{cards}
      				</section>
      </div>
    );
  }
  getChampions(){

   fetch("champions.json")
   .then(res => res.json())
   .then(
     (result) => {
       let rChamps = this.randomPick(result, this.props.number);
       this.setState({
         isLoaded: true,
         champions: rChamps
       });
     },
     (error) => {
       this.setState({
         isLoaded: true,
         error
       });
     }
   );

 }

 randomPick(champs, number) {
 		let rChamps = [];
 		for (let i = 0; i < (number / 2); i++) {

 			let elem = champs.splice(Math.floor(Math.random() * champs.length), 1)[0];

 			rChamps.push({"id": elem.key, "name": elem.name, "img": elem.key + "_0.jpg", flipped: true});
 			rChamps.push({"id": elem.key, "name": elem.name, "img": elem.key + "_1.jpg", flipped: true});
 		}

 		return rChamps;
 	}

 generateCards(champs) {
 		let cards = [];
 		for (let i = 0; i < champs.length; i++) {
 			cards.push(
 				<Card id={champs[i].id}
 					  name={champs[i].name}
 					  img={champs[i].img}
 					  flipped={champs[i].flipped}
 					  key={i}
 					  onClick={this.handleClick.bind(this, i)}
 				/>);
 		}
 		return cards;
 	}





}

export default CardDeck;
