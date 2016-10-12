import { Updater } from 'redux-elm';
import * as initialState from './initialState';

import { init as tripInfoInit } from 'components/TripInfo/updater';
import Contacts, { init as contactsInit } from 'components/Contacts/updater';
import PaywaySelect, { init as paywaySelectInit } from 'components/PaywaySelect/updater';


export const init = (state = initialState) => ({
	tripInfo: tripInfoInit(state.tripInfo),
	contacts: contactsInit(state.contacts),
	paywaySelect: paywaySelectInit(state.paywaySelect)
});


export default new Updater(init())
	.case('Contacts', (model, action) => ({...model, contacts: Contacts(model.contacts, action)}))
	.case('PaywaySelect', (model, action) => ({...model, paywaySelect: PaywaySelect(model.paywaySelect, action)}))
	.toReducer();