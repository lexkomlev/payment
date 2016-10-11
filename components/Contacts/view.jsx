import React from 'react';
import { view, forwardTo } from 'redux-elm';

import Input from 'components/Input/view';



export default view(({ model, dispatch }) => (
	<div>
		<Input
			model={model.lastName}
			dispatch={forwardTo(dispatch, 'LastName')}
		/>
		<Input
			model={model.firstName}
			dispatch={forwardTo(dispatch, 'FirstName')}
		/>
	</div>
));