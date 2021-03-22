import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharactersListFromServer } from '../redux/action';
import { AppStateType } from '../redux/rootReducer';
import { ResultsItemType } from '../types/types';
import { PaginationComponent } from './PaginationComponent';
import { CardComponent } from './CardComponent';
import { FilterAndSearch } from './FilterAndSearch';
import { useLocation } from 'react-router';
import { Alert } from 'antd';


export const CharactersList: React.FC = () => {
	const list = useSelector((state: AppStateType) => state.character.charactersList);
	const app = useSelector((state: AppStateType) => state.app)
	const dispatch = useDispatch()

	const [saveLocation, setSaveLocation] = useState({pathname: '', page: 1, name: '', status: ''});
	let location = useLocation();

	useEffect(() => {
		let pathname = '/' + (location.pathname.split('/'))[1];
		
		if (!location.search) {
			setSaveLocation({pathname, page: 1, name: '', status: ''});
			return;
		}
		
		let page = +((location.search.split('&')[0]).split('page='))[1];
		let name = ((location.search.split('&')[1]).split('name='))[1];
		let status = ((location.search.split('&')[2]).split('status='))[1];
		setSaveLocation({pathname, page, name, status});
		// eslint-disable-next-line
	}, [location]);

	useEffect(() => {
		const {pathname, ...params} = {...saveLocation};
		dispatch(getCharactersListFromServer(params));
		// eslint-disable-next-line
	}, [saveLocation])

	
	return (
		<>
			<FilterAndSearch {...saveLocation}/>
			{app.isError && <Alert
				message="Error"
				description={app.errorMessage}
				type="error"
				showIcon
				style={{ marginTop: '20px' }}
			/> }
			<div className="list">
				{list?.results?.map((item: ResultsItemType) => (
					<CardComponent key={item.id} card={item} />
				))}
			</div>
			<PaginationComponent info={list.info} {...saveLocation}/>
		</>
	);
};