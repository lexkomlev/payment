import React from 'react';
import { view } from 'redux-elm';

import { FormattedMessage } from 'react-intl';

import testAttribute from 'src/utils/autotest';



export default view(({ model }) => (
	<div className="b-train__order__trip_info t-txt-s">
		<FormattedMessage
			id="trip_info.route"
			tagName="div"
			description="Маршрут поезда"
			defaultMessage='Маршрут поездки: {departureStation} → {arrivalStation}'
			values={{
				departureStation: model.tripDepartureStationName,
				name: model.tripArrivalStationName
			}}
			{ ...testAttribute('trip_info_route') }
		/>
	</div>
));