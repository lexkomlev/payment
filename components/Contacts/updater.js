import { Updater, Matchers } from 'redux-elm';
import * as initialState from './initialState';

import Input from '../Input/updater';
import Checkbox from '../Checkbox/updater';


export const init = (state = {}) => ({ ...initialState, ...state});


export default new Updater(init())
	.case('LastName', (model, action) => ({...model, lastName: Input(model.lastName, action)}))
	.case('FirstName', (model, action) => ({...model, firstName: Input(model.firstName, action)}))
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