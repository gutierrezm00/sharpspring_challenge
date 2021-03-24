import { all } from 'redux-saga/effects';

import userWatcher from './user';

export default function* saga() {
	yield all([
		userWatcher(),
	]);
}
