import { Updater } from 'redux-elm';
import * as initialState from './initialState';

import Input from '../Input/updater';
import Checkbox from '../Checkbox/updater';


export const init = (state = initialState) => state;


export default new Updater(init())
	.case('LastName', (model, action) => ({...model, lastName: Input(model.lastName, action)}))
	.case('FirstName', (model, action) => ({...model, firstName: Input(model.firstName, action)}))
	.case('Checkboxes', (model, action) => {

		const checkboxes = [ ...model.checkboxes ],
			index = checkboxes.findIndex(el => el.value === (action.payload || {}).value);

		checkboxes[index] = Checkbox(
			checkboxes[index],
			action
		);

		return {
			...model,
			checkboxes: checkboxes
		};

	})
	.toReducer();