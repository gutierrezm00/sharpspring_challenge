import constants from './constants';

export default {
	session: (data) => ({ type: constants.session, data }),
	users: (data) => ({ type: constants.accounts, data }),
};
