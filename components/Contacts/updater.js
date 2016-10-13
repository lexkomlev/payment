import { Updater, Matchers } from 'redux-elm';
import * as initialState from './initialState';

import ValidatedInput, { init as validatedInputInit, setUnderValidation as setInputUnderValidation } from './__validatedInput/updater';
import Checkbox from '../Checkbox/updater';


export const init = (state = {}) => ({
	...initialState,
	...state,
	lastName: validatedInputInit(state.lastName || {}),
	firstName: validatedInputInit(state.firstName || {}),
	email: validatedInputInit(state.email || {}),
	phone: validatedInputInit(state.phone || {})
});


export const setUnderValidation = (state, underValidation) => ({
	...state,
	lastName: setInputUnderValidation(state.lastName, underValidation),
	firstName: setInputUnderValidation(state.firstName, underValidation),
	email: setInputUnderValidation(state.email, underValidation),
	phone: setInputUnderValidation(state.phone, underValidation)
});


export default new Updater(init())
	.case('LastName', (model, action) => ({...model, lastName: ValidatedInput(model.lastName, action)}))
	.case('FirstName', (model, action) => ({...model, firstName: ValidatedInput(model.firstName, action)}))
	.case('Checkbox', (model, action) => {
		const checkboxValue = action.matching.args.param;
		return {
			...model,
			checkboxes: model.checkboxes.map((checkbox) => {
				if (checkbox.value === checkboxValue) {
					return Checkbox(checkbox, action);
				} else {
					return checkbox;
				}
			})
		};

	}, Matchers.parameterizedMatcher)
	.toReducer();