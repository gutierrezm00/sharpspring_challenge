import { combineReducers } from 'redux';
import constants from './constants';

const basic = (name, defaultValue) => {
	const defaultState = JSON.parse(JSON.stringify(defaultValue));
	return (state = defaultState, action) => {
		switch (action.type) {
		// On Success
		case `${constants[name]}_SUCCESS`:
			return action.data;
		case `${constants[name]}_FAILURE`:
			return action.data;
		case `${constants[name]}_RESET`:
			return defaultValue;
		default:
			return state;
		}
	};
};

const objMap = (name, defaultValue) => {
	const defaultState = JSON.parse(JSON.stringify(defaultValue));
	return (state = defaultState, action) => {
		switch (action.type) {
		// On Success
		case constants[name]:
			return { ...state, ...action.data };
		case `${constants[name]}_SUCCESS`:
			return { ...state, ...action.data };
		case `${constants[name]}_FAILURE`:
			return { ...state, ...action.data };
		case `${constants[name]}_RESET`:
			return defaultValue;
		default:
			return state;
		}
	};
};

const loaded = basic('loaded', false);

// User UI Preferences
const defaultSession = {
	user_id: null,
};

const session = objMap('session', defaultSession);

export default combineReducers({
	loaded,
	session,
});
