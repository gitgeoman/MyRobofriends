import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import './components/fonts/SEGA.woff';

import App from './containers/App';
import * as serviceWorker from './serviceWorker'; // nowa funkcja która umozliwia aplikacjom działać szybciej
import 'tachyons';

ReactDOM.render( <App /> //wysyła obiekt roboty

	, document.getElementById('root')); 
// w tej linijce jest esencja aplikacji react renderowane są obiekty

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
