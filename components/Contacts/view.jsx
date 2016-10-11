import React from 'react';
import { view, forwardTo } from 'redux-elm';

import Input from 'components/Input/view';
import Checkbox from 'components/Checkbox/view';



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
		{ model.checkboxes.map((checkbox, index) => (
				<Checkbox
					model={checkbox}
					dispatch={forwardTo(dispatch, 'Checkboxes')}
					key={`checkbox_${index}`}
				/>
			)
		) }
	</div>
));