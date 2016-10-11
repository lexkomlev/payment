import React from 'react';
import { view, forwardTo } from 'redux-elm';

import TripInfo from 'components/TripInfo/view';
import Contacts from 'components/Contacts/view';


export default view(({ model, dispatch }) => (
    <div>
        <TripInfo model={model.tripInfo} dispatch={forwardTo(dispatch, 'TripInfo')} />
        <Contacts model={model.contacts} dispatch={forwardTo(dispatch, 'Contacts')} />
    </div>
));