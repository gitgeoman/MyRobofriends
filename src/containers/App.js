import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js'
import ErrorBoundry from '../components/errorBoundry.js'

import {setSearchField, requestRobots} from '../actions'; 

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField, //calling the reducer atrotribute
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) =>{
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: ()=> dispatch(requestRobots())
	}
}

class App extends Component {

	componentDidMount(){
		this.props.onRequestRobots();
	}

	render(){
	
		const {searchField, onSearchChange, robots, isPending} = this.props;
		const filteredRobots=robots.filter((robot)=>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})
		return isPending ?
			<h1>Loading</h1>:
		(
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={ onSearchChange}/>
					<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots}/>
					</ErrorBoundry>
					</Scroll>
				</div>
			);
	}
}
//connct to redux store
export default connect(mapStateToProps, mapDispatchToProps)(App);