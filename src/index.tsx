import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import 'antd/dist/antd.css';
import {App} from './App';
import { applyMiddleware, createStore } from 'redux';
// import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';
import thunk from 'redux-thunk';
// import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer, 
	applyMiddleware(thunk)
);

// const store = createStore(rootReducer, compose(
// 	applyMiddleware(thunk),
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// ));

const app = (
	<Provider store={store}>
		<>
			<App />
		</>
	</Provider>
);

ReactDOM.render(
	app,
	document.getElementById('root')
);

