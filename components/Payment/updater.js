import { Updater } from 'redux-elm';
import * as initialState from './initialState';

import { init as tripInfoInit } from 'components/TripInfo/updater';


export const init = (state = initialState) => ({
	tripInfo: tripInfoInit(state.tripInfo)
});


export default new Updater(init())
  .toReducer();