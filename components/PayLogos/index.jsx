import styles from './styles';
import React from 'react';


const PayLogos = ( { logos, className } ) => (
	<span className={className}>
		{ logos.map((logo) => (
			<div
				className={`${styles.paylogo} ${styles[logo]}`}
				key={`${logo}_logo`}
			/>
		)) }
	</span>
);


PayLogos.defaultProps  = {
	logos: []
};

export default PayLogos;