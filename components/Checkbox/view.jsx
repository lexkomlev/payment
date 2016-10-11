import React from 'react';
import { view } from 'redux-elm';


import { change } from './actions';


export default view( ({ model, dispatch }) => (
	<label>
		<input
			{ ...model }
			type="checkbox"
			onChange={ (e) => { dispatch(change(e.target.checked, model.value)) } }
		/>
		<span dangerouslySetInnerHTML={{__html: model.label}} />
	</label>
));