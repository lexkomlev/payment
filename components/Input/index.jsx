// import styles from './styles';
import React from 'react';


const Input = (props) => {
	const { modifier, ...rest } = props;
	return (
		<input
			{ ...rest }
			className={`b-input__standart ${modifier}`}
		/>
	);
};


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