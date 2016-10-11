import React from 'react';
import { render } from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import reduxElm from 'redux-elm';


import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
addLocaleData([...en, ...ru]);



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
		<IntlProvider locale="ru" defaultLocale="ru">
			<Provider store={store}>
				<ConnectedView />
			</Provider>
		</IntlProvider>
	), document.getElementById(containerDomId));

}