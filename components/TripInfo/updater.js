import { Updater } from 'redux-elm';
import * as initialState from './initialState';


export const init = (state = initialState) => state;


export default new Updater(init())
	.toReducer();