import React from 'react';
import { view, forwardTo } from 'redux-elm';

import Input from 'components/Input/view';



export default view( ( { model, dispatch, ...rest } ) => {
	const showInvalid = model.underValidation && !model.isValid;
	return (
		<div>
			<Input
				{ ...rest }
				modifier={showInvalid ? 'error' : ''}
				model={model.value}
				dispatch={forwardTo(dispatch, 'Input')}
			/>
			{ showInvalid && <span style={{color: "red"}}>This input in invalid (instead of popup)</span> }
		</div>
	)
});