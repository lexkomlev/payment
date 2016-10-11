import 'babel-polyfill';
import run from './boilerplate';

import view from 'components/Payment/view';
import updater from 'components/Payment/updater';

run('app', view, updater);