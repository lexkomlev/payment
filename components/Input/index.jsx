// import styles from './styles';
import React from 'react';


class Input extends React.Component {
	render () {
		return <input
			type={this.props.type}
			className={`b-input__standart ${this.props.modificator}`}
			value={this.props.value}
			placeholder={this.props.placeholder}
			onChange={this.props.onChange}
			onBlur={this.props.onBlur}
			onFocus={this.props.onFocus}
			onKeyDown={this.props.onKeyDown}
		/>;
	}
}

Input.defaultProps  = {
	modificator: '',
	placeholder: '',
	type: 'text',
	value: '',
	onChange: () => {},
	onBlur: () => {},
	onFocus: () => {},
	onKeyDown: () => {}
};

export default Input;