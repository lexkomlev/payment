import { Updater } from 'redux-elm';
import * as initialState from './initialState';

import { CHANGE } from './actions';



export const init = (state = initialState) => state;

export default new Updater(init())
	.case(CHANGE, (model, { payload }) => ({ ...model, checked: payload.checked }))
	.toReducer();