import styles from './styles.less';

import React from 'react';
import { view } from 'redux-elm';


import { click } from './actions';


export default view( ({ model, dispatch }) => (
	<div className={styles.wrapper} onClick={ () => {dispatch(click(model))} }>
		Payway: {model}
	</div>
));