import { Updater } from 'redux-elm';
import * as initialState from './initialState';

import Input from '../Input/updater';


export const init = (state = initialState) => state;


export default new Updater(init())
	.case('LastName', (model, action) => ({...model, lastName: Input(model.lastName, action)}))
	.case('FirstName', (model, action) => ({...model, firstName: Input(model.firstName, action)}))
	.toReducer();