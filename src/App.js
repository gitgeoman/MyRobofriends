import React, {Component} from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import {robots} from './robots.js';

//STATE - the object that describes your application. it can be changed. State should be described in parent


class App extends Component {
	
	constructor(){
		super() // wywolanie konstruktora dla Component
		this.state={
			robots: robots,
			searchfield: ''
		} 
	}

	onSearchChange=(event)=>{ //tutaj trzeba używać takiej składni żeby nie było problemu z dostępem do obiektu filtrowanie opisane w odc 208
		console.log(event.target.value);
		this.setState({searchfield:event.target.value})
		
	};
	render(){
		const filteredRobots=this.state.robots.filter((robots)=>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		return (
			<div className='tc'>
				<h1>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList robots={filteredRobots}/>
			</div>
		);
	}
}

export default App;