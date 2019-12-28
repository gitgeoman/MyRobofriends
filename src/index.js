import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Provider} from 'react-redux'; // wywołanie redux
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import './components/fonts/SEGA.woff';

import App from './containers/App';
import * as serviceWorker from './serviceWorker'; // nowa funkcja która umozliwia aplikacjom działać szybciej
import {searchRobots, requestRobots} from './reducers';//import reduktorów
import 'tachyons';


const logger = createLogger(); //calling middleware
const rootReducer = combineReducers({searchRobots, requestRobots})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root')); 
// w tej linijce jest esencja aplikacji react renderowane są obiekty

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();