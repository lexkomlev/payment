// import styles from './styles';
import React from 'react';

import PayLogos from '../../PayLogos';

import { FormattedMessage } from 'react-intl';


export default ({onSubmit}) => {
	return (
		<div>
			<div>
				<FormattedMessage
					id="paywaySelect.card.title"
					tagName="span"
					defaultMessage='Банковской картой: '
				/>
				<FormattedMessage
					id="paywaySelect.card.types"
					tagName="span"
					description="Типы карт с иконками"
					defaultMessage='подойдёт {visa}, {maestro}, {mastercard} или {visaelectron}'
					values={{
						visa: <PayLogos logos={["visa"]} />,
						maestro: <PayLogos logos={["maestro"]} />,
						mastercard: <PayLogos logos={["mastercard"]} />,
						visaelectron: <PayLogos logos={["visaelectron"]} />
					}}
				/>
				<button onClick={ (e) => {
					e.stopPropagation();
					onSubmit();
				} }>Submit</button>
			</div>
		</div>
	);
}