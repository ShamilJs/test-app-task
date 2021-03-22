import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
  } from "react-router-dom";
import { LayoutComponent } from './Components/LayoutComponent';
import { CharactersList } from './Components/CharactersList';
import { LocationList } from './Components/LocationList';
import { EpisodeList } from './Components/EpisodeList';
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
						<LocationList/>
					</Route>
					<Route path="/episode" >
						<EpisodeList/>
					</Route>
				</Switch> 
			</LayoutComponent>
		</Router>
	);
};