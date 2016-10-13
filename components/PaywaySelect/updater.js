import { Updater } from 'redux-elm';
import * as initialState from './initialState';

import Payway from './__payway/updater';



export const init = (state = {}) => ({ ...initialState, ...state});

export default new Updater(init())
	.case('Payway', (model, action) => ({ ...model, selectedPayway: Payway(model.selectedPayway, action) }))
	.toReducer();