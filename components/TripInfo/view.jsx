import React from 'react';
import { view } from 'redux-elm';

import { FormattedMessage } from 'react-intl';



import UserChoiceInfo from ('bemp/blocks/train/common/userChoiceInfo/component';


tagName

export default view(({ model }) => (
    <div className="b-train__order__trip_info t-txt-s">
        <div>
        <FormattedMessage
            id="trip_info.route"
            description="Маршрут поездки"
            defaultMessage='Маршрут поездки: '
        />
         <FormattedMessage
            id="trip_info.route"
            description="Маршрут поездки"
            defaultMessage='Маршрут поездки: '
        />
        </div>
        <FormattedMessage
            id="trip_info.route"
            tagName="div"
            description="Маршрут поезда"
            defaultMessage='Маршрут поездки: {trip}Москва Курская (Курский вокзал) → Санкт-Петербург-Главн. (Московский вокзал) {name}!'
            values={{
                trip: 
                name: model.tripDepartureStationName
            }}
        />
        <div>
       
		<span { ...autoTest.testAttribute('trip_info_route') }>
			<Html innerHtml={ this.props.tripDepartureStationName + ' &rarr; ' + this.props.tripArrivalStationName }/>
		</span>
	</div>
	<div>
		<Html tag="span" innerHtml={ Language.getLabel('bemp.blocks.train.seats.trip_info.train')} />:
		<span { ...autoTest.testAttribute('trip_info_train') }>
			<span { ...autoTest.testAttribute('trip_info_train_number') }>{ this.props.trainNumber } </span>
			<span key="t_zone"
				  rt-if="this.props.trainName"
				  { ...autoTest.testAttribute('trip_info_train_name') }>
				<Html innerHtml={ '&laquo;' + this.props.trainName + '&raquo;&nbsp;'} />
			</span>
			<span { ...autoTest.testAttribute('trip_info_train_route') }>
				<Html innerHtml={ this.props.trainDepartureCityName + ' &rarr; ' + this.props.trainArrivalCityName }/>
			</span>
		</span>
		<span key="ereg" rt-if="this.props.hasEregInfo" { ...autoTest.testAttribute('trip_info_ereg') }>
			<Ereg isAvailable={this.props.isEregPossible} className="ereg_wrapper" />
		</span>
	</div>
	<div>
		<Html tag="span" innerHtml={ Language.getLabel('bemp.blocks.train.seats.trip_info.departure') + ': ' } />
		<span key="dep_date"
			  rt-if="this.props.tripDepartureDate"
			  { ...autoTest.testAttribute('trip_info_departure') }>
			<span className="t-b">
				<Html innerHtml={ this.props.tripDepartureDate + ' '} />
			</span>
			<Html tag="span" innerHtml={ Language.getLabel('common.in') + ' ' } />
			<span className="t-b">
				<Html innerHtml={ this.props.tripDepartureTime + ' ' } />
			</span>
			<span key="t_zone" rt-if="this.props.showDepartureTimezone">
				<Html innerHtml={ this.props.showDepartureTimezone } />
			</span>
		</span>
	</div>
	<div>
		<Html tag="span" innerHtml={ Language.getLabel('bemp.blocks.train.seats.trip_info.arrival') + ': '} />
		<span key="arrival"
			  rt-if="this.props.tripArrivalTime"
			  { ...autoTest.testAttribute('trip_info_arrival') }>
			<span className="t-b">
				<Html innerHtml={ this.props.tripArrivalDate + ' '} />
			</span>
			<Html tag="span" innerHtml={ Language.getLabel('common.in') + ' ' } />
			<span className="t-b">
				<Html innerHtml={ this.props.tripArrivalTime } />
			</span>
			<span key="ar_t_zone"
				  rt-if="this.props.showArrivalTimezone">
				<Html tag="span" innerHtml="&nbsp;{this.props.showArrivalTimezone} />
			</span>
		</span>
		<span key="dur"
			  rt-if="this.props.tripDuration"
			  { ...autoTest.testAttribute('trip_info_duration') }>,
			<span>
				<Html tag="span" innerHtml={ ' ' + Language.getLabel('bemp.blocks.train.seats.trip_info.duration') + ': ' + this.props.tripDuration } />
			</span>
		</span>
		<UserChoiceInfo key="userChoiceInfo" rt-if="this.props.showUserChoiceInfo" carInfo={this.props.carInfo} seatsInfo={this.props.seatsInfo}></UserChoiceInfo>
	</div>
    </div>
));