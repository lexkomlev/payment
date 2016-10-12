import styles from './styles.less';

import React from 'react';
import { view } from 'redux-elm';


import { click } from './actions';

import CardContent from '../__content/card'
import EurosetContent from '../__content/euroset'


class Payway extends React.Component {

	getContentComponent (payway) {
		switch (payway) {
			case 'card':
				return <CardContent />;
			default:
				return <EurosetContent />;
		}
	}

	render () {
		const { model, dispatch } = this.props;
		return (
			<div className={styles.wrapper} onClick={ () => {dispatch(click(model))} }>
				{this.getContentComponent(model)}
			</div>
		)
	}

}

export default view(Payway);