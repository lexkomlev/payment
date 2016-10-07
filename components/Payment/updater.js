import { Updater } from 'redux-elm';

const initialModel = 0;

export default new Updater(initialModel)
  .toReducer();