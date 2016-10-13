import styles from './styles';
import React from 'react';


const Input = ({ modifier, ...rest }) => (
	<input
		{ ...rest }
		className={`${styles.standart} ${!!modifier ? styles[modifier] : ''}`}
	/>
);


Input.defaultProps  = {
	modifier: '',
	placeholder: '',
	type: 'text',
	value: '',
	onChange: () => {},
	onBlur: () => {},
	onFocus: () => {},
	onKeyDown: () => {}
};


export default Input;