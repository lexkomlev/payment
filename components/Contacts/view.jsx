import React from 'react';
import { view, forwardTo } from 'redux-elm';

import Input from 'components/Input/view';
import Checkbox from 'components/Checkbox/view';

import { defineMessages, injectIntl } from 'react-intl';



const messages = defineMessages({
	lastName: {
		id: 'Contacts.lastName',
		defaultMessage: 'Фамилия',
		description: 'Placeholder фамилии',
	},
	firstName: {
		id: 'Contacts.firstName',
		defaultMessage: 'Имя',
		description: 'Placeholder имени',
	}
});



const Component = ( props ) => {
	const { formatMessage } = props.intl,
		{ model, dispatch } = props;
	return (
		<div>
			<Input
				model={model.lastName}
				dispatch={forwardTo(dispatch, 'LastName')}
				placeholder={formatMessage(messages.lastName)}
			/>
			<Input
				model={model.firstName}
				dispatch={forwardTo(dispatch, 'FirstName')}
				placeholder={formatMessage(messages.firstName)}
			/>
			<br />
			{ model.checkboxes.map((checkbox, index) => (
					<Checkbox
						model={checkbox}
						dispatch={forwardTo(dispatch, 'Checkbox', checkbox.value)}
						key={`checkbox_${checkbox.value}`}
					/>
				)
			) }
		</div>
	)
};


export default view(injectIntl(Component));