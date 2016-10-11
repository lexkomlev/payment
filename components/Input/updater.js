import { Updater } from 'redux-elm';

import { CHANGE } from './actions';


export const init = (state = '') => state;

export default new Updater(init())
	.case(CHANGE, (model, { payload }) => payload)
	.toReducer();