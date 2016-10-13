import styles from './styles';

import React from 'react';
import { view, forwardTo } from 'redux-elm';

import { defineMessages, injectIntl, FormattedMessage } from 'react-intl';
import * as messagesObj from './messages';

import testAttribute from 'src/utils/autotest';


import ValidatedInput from './__validatedInput/view';
import Checkbox from 'components/Checkbox/view';



const messages = defineMessages(messagesObj);



const Component = ( props ) => {
	const { formatMessage } = props.intl,
		{ model, dispatch } = props;
	return (
		<div>

			<label className={styles.inputWrapper} {...testAttribute('contacts_last_name')}>
				<span className={styles.inputLabel}>
					<FormattedMessage  { ...messages.lastName } />
				</span>
				<ValidatedInput
					model={model.lastName}
					dispatch={forwardTo(dispatch, 'LastName')}
					errorMessage={formatMessage(messages.lastNameError)}
					name={formatMessage(messages.lastName)}
					tabIndex="1"
				/>
			</label>


			<label className={styles.inputWrapper} {...testAttribute('contacts_first_name')}>
				<span className={styles.inputLabel}>
					<FormattedMessage  { ...messages.firstName } />
				</span>
				<ValidatedInput
					model={model.firstName}
					dispatch={forwardTo(dispatch, 'FirstName')}
					errorMessage={formatMessage(messages.firstNameError)}
					name={formatMessage(messages.firstName)}
					tabIndex="2"
				/>
			</label>

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