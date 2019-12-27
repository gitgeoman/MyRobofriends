import React, {Component} from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js'

//STATE - the object that describes your application. it can be changed. State should be described in parent


class App extends Component {
	
	constructor(){
		super() // wywolanie konstruktora dla Component
		this.state={
			robots: [],
			searchfield: ''
		} 
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>{return response.json()})
		.then(users=>{this.setState({robots:users})})
	}

	onSearchChange=(event)=>{ //tutaj trzeba używać takiej składni żeby nie było problemu z dostępem do obiektu filtrowanie opisane w odc 208
		//console.log(event.target.value);
		this.setState({searchfield:event.target.value})
		
	};
	render(){
		const {robots, searchfield} =this.state;
		const filteredRobots=robots.filter((robot)=>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		return !robots.length ?
			<h1>Loading</h1>:
		(
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>
			);
		}
	}


export default App;