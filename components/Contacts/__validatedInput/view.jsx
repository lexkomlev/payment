import React from 'react';
import { view, forwardTo } from 'redux-elm';

import Input from 'components/Input/view';



export default view( ( { model, dispatch, ...rest } ) => (
	<div>
		<Input
			{ ...rest }
			model={model.value}
			dispatch={forwardTo(dispatch, 'Input')}
		/>
		{ model.underValidation && !model.isValid && <span style={{color: "red"}}>This input in invalid</span> }
	</div>
));