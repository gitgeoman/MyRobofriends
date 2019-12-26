import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker'; // nowa funkcja która umozliwia aplikacjom działać szybciej
import 'tachyons';
import {robots} from './robots'; //tutaj importuję dane z tabeli zawierającej obiekty i robię destrukturyzację i teraz każdy obiekt może być wywołany jako "robots"


ReactDOM.render( <App /> //wysyła obiekt roboty

	, document.getElementById('root')); 
// w tej linijce jest esencja aplikacji react renderowane są obiekty

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
