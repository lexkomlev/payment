import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxElm from 'redux-elm';



export default (containerDomId, View, updater) => {

	const storeFactory = compose(
		reduxElm,
		applyMiddleware(
			routerMiddleware(browserHistory)
		),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)(createStore);


	const reducers = combineReducers({
		root: updater,
		routing: routerReducer
	});

	const store = storeFactory(reducers);

	const history = syncHistoryWithStore(browserHistory, store);

	render((
		<Provider store={store}>
			<View
				history={history}
				dispatch={store.dispatch}
			/>
		</Provider>
	), document.getElementById(containerDomId));

}