import React from 'react';
import { view, forwardTo } from 'redux-elm';

import TripInfo from 'components/TripInfo/view';


export default view(({ model, dispatch }) => (
    <div>
        <TripInfo model={model.tripInfo} dispatch={forwardTo(dispatch, 'TripInfo')} />
    </div>
));