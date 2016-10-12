import React from 'react';
import { view, forwardTo } from 'redux-elm';

import Payway from './__payway/view';


export default view( ({ model, dispatch }) => (
	<div>
		<div>Selected payway: {model.selectedPayway}</div>

		{ model.paywayList.map(payway => (
			<Payway
				model={payway.name}
				dispatch={forwardTo(dispatch, 'Payway')}
			/>
		)) }

	</div>
));