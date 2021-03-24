import React from 'react';

const initialState = {
	user_id: false,
	session: false
};
const Context = React.createContext(initialState);

function Provider(props) {
	const {
		children
	} = props;

	return (
		<Context.Provider state>
			{children}
		</Context.Provider>
	);
}

export default {
	Context,
	Provider
};
