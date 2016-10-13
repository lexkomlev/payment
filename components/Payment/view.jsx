import styles from './styles';

import React from 'react';
import { view, forwardTo } from 'redux-elm';

import TripInfo from 'components/TripInfo/view';
import Contacts from 'components/Contacts/view';
import PaywaySelect from 'components/PaywaySelect/view';



export default view(({ model, dispatch }) => (
    <div className={styles.wrapper}>
        <TripInfo model={model.tripInfo} dispatch={forwardTo(dispatch, 'TripInfo')} />
        <br/>
        <Contacts model={model.contacts} dispatch={forwardTo(dispatch, 'Contacts')} />
        <br/>
        <PaywaySelect model={model.paywaySelect} dispatch={forwardTo(dispatch, 'PaywaySelect')} />
    </div>
));