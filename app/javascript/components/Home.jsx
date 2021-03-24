/* eslint-disable */ 

import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Buttons, Icons, Theme } from './Global';
import Context from './Context';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	hr {
		border: none;
		border-bottom: 1px solid ${Theme.colors.grey};
	}
`;
export default function Default() {
	library.add(fas);

	const { session } = useSelector((store) => store);
	const { user_id } = session;

	if (!user_id) {
		return (
			<Router>
				<Container>
					<Switch>
						NEW USER REGISTRATION TODO:
						{/* <Route path="/register" component={Register} /> */}
					</Switch>
				</Container>
			</Router>
		);
	}
	return (
		<>
			<Buttons.Primary>
				Login
			</Buttons.Primary>
			<Icons.Primary>
				<FontAwesomeIcon icon="cogs" />
			</Icons.Primary>
		</>
	);
}
