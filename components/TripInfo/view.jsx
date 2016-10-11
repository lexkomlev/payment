import React from 'react';
import { view } from 'redux-elm';

import { FormattedMessage } from 'react-intl';

import testAttribute from 'src/utils/autotest';



export default view(({ model }) => (
	<div>
		{ model.map( (tripInfo, index) => (
			<div className="b-train__order__trip_info t-txt-s" key={`trip_info_${index}`}>

				<FormattedMessage
					id="trip_info.route"
					tagName="div"
					description="Маршрут поезда"
					defaultMessage='Маршрут поездки: {departureStation} → {arrivalStation}'
					values={{
						departureStation: tripInfo.tripDepartureStationName,
						arrivalStation: tripInfo.tripArrivalStationName
					}}
					{ ...testAttribute('trip_info_route') }
				/>
				{/*TODO rest of the stuff*/}
			</div>
		) ) }
	</div>
));