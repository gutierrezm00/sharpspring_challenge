/* eslint-disable */

import {
	call,
	put,
	takeLatest,
	select
} from 'redux-saga/effects';

function* fetchSession() {
	try {
		// Get session
		// const session = yield call(API.Session.get);
		yield put({ type: 'SESSION_SUCCESS', data: session });
	} catch (e) {
		yield put({ type: 'ERROR', data: { error: e.message } });
	}
}

function* load() {
	try {
		yield* fetchSession();
		yield put({ type: 'LOADED_SUCCESS', data: true });
	} catch (e) {
		// This makes sure loading is set to true regardless.
		yield put({ type: 'LOADED_SUCCESS', data: true });
	}
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* logout(action) {
	try {
		yield call(API.Me.logout, action.data);
		yield put({ type: 'SESSION_RESET' });
	} catch (e) {
		yield put({ type: 'ERROR', data: { error: e.message } });
	}
}

function* updateSession(action) {
	try {
		const prevSession = yield select((state) => state.session);
		if (
			(action.data.user_id && action.data.user_id !== prevSession.user_id)
		) {
			// Session update
			yield call(API.Session.update, action.data);
			yield* fetchSession();
		}
	} catch (e) {
		yield put({ type: 'ERROR', data: { error: e.message } });
	}
}

export default function* watcher() {
	yield takeLatest('LOAD', load);
	yield takeLatest('LOGOUT', logout);
	yield takeLatest('SESSION_UPDATE', updateSession);
	yield takeLatest('SESSION', fetchSession);
}
