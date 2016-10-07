import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import reduxElm from 'redux-elm';

import { IntlProvider } from 'react-intl';


export default (containerDomId, View, updater) => {

	const storeFactory = compose(
		reduxElm,
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)(createStore);

	const store = storeFactory(updater);

	const ConnectedView = connect(appState => ({
		model: appState
	}))(View);

	render((
		<IntlProvider locale="ru">
			<Provider store={store}>
				<ConnectedView />
			</Provider>
		</IntlProvider>
	), document.getElementById(containerDomId));

}