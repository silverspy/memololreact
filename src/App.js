import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card.js'
import CardDeck from './CardDeck.js'
class App extends Component {
  constructor(props) {
		super(props);
		this.state = {
			value: '8'
		};

		this.handleChange = this.handleChange.bind(this);


	}
  handleChange(e) {
  		this.setState({value: e.target.value});
  	}
  render() {
		return (
			<div className="container-fluid">


				<div className="container">
					<h1>Memo LoL</h1>
					<div className="form-group row">
						<label className="col-sm-3 col-form-label" htmlFor="nbcards">Number of cards</label>
						<select className="col form-control" id="nbcards" value={this.state.value}
								onChange={this.handleChange}>
							<option value="8">8</option>
							<option value="12">12</option>
							<option value="16">16</option>
							<option value="20">20</option>
						</select>
					</div>
					<div className="row">
						<CardDeck number={this.state.value}/>
					</div>
				</div>
			</div>
		)
	}
}

export default App;
