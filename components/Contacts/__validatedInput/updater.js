import { Updater } from 'redux-elm';
import * as initialState from './initialState';

import validate from './validator';

import Input from '../../Input/updater';


export const init = (state = {}) => ({
	...initialState,
	...state,
	isValid: validate(state.value || initialState.value),
});


export const setUnderValidation = (state, underValidation) => ({...state, underValidation: underValidation});


export default new Updater(init())
	.case('Input', (model, action) => {
		return ({
			...model,
			isValid: validate(action.payload),
			value: Input(model.value, action)
		})
	})
	.toReducer();