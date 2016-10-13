import React from 'react';
import { view, forwardTo } from 'redux-elm';

import Input from 'components/Input/view';



export default view( ( { model, dispatch, errorMessage, ...rest } ) => {
	const showInvalid = model.underValidation && !model.isValid;
	return (
		<div>
			<Input
				{ ...rest }
				modifier={showInvalid ? 'error' : ''}
				model={model.value}
				dispatch={forwardTo(dispatch, 'Input')}
			/>
			{ showInvalid && <div style={{color: "red", width: "20px", whiteSpace: "nowrap", visibility: "visible"}}>{errorMessage}</div> }
		</div>
	)
});