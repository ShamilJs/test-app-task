import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";
import { LayoutComponent } from './Components/LayoutComponent';
import { Loader } from './Components/Loader';
import { PaginationComponent } from './Components/PaginationComponent';
import { CharactersList } from './Components/CharactersList';
import { Location } from './Components/Location';
import { Episode } from './Components/Episode';

import './App.css';

export const App = () => {
	

	

	return (
		<Router>
			<LayoutComponent>
				<Switch>
					<Route exact path="/">
						<CharactersList/>
					</Route>
					<Route path="/Location">
						<Location/>
					</Route>
					<Route path="/Episode" >
						<Episode/>
					</Route>
					{/* <Route path="/:id" children={<Child />} /> */}
					
				</Switch> 
				<Loader/>
			</LayoutComponent>
			{/* <PaginationComponent/>		 */}
		</Router>
	);
};

// function Child() {
// 	let { id }: any = useParams();

// 	// console.log(id);
	
  
// 	return null
//   }