import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
  } from "react-router-dom";
import { LayoutComponent } from './Components/LayoutComponent';
import { Loader } from './Components/Loader';
import { CharactersList } from './Components/CharactersList';
import { Location } from './Components/Location';
import { Episode } from './Components/Episode';
import './App.css';

export const App: React.FC = () => {
	

	return (
		<Router>
			<LayoutComponent>
				<Switch>
					<Redirect exact from="/" to="/character"/>
					<Route path="/character">
						<CharactersList/>
					</Route>
					<Route path="/location">
						<Location/>
					</Route>
					<Route path="/episode" >
						<Episode/>
					</Route>
				</Switch> 
				<Loader/>
			</LayoutComponent>
		</Router>
	);
};