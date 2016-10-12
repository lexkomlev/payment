import { Updater } from 'redux-elm';

import { CLICK } from './actions';


export const init = (state = 'card') => (state);

export default new Updater(init())
	.case(CLICK, (model, { payload }) => payload)
	.toReducer();