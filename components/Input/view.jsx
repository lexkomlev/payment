import React from 'react';
import { view } from 'redux-elm';

import Input from './index';

import { change } from './actions';



export default view( ({ model, dispatch, ...rest }) => (
	<Input
		{ ...rest }
		value={model}
		onChange={ (e) => { dispatch(change(e.target.value)) } }
	/>
) );