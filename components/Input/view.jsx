import React from 'react';
import { view } from 'redux-elm';

import Input from './index';

import { change } from './actions';



export default view( (props) => {
	const { model, dispatch, ...rest } = props;
	return (
		<Input
			{ ...rest }
			value={model}
			onChange={ (e) => { dispatch(change(e.target.value)) } }
		/>
	)
});