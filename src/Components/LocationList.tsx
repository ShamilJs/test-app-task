import React from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../redux/rootReducer';
import { ResultsItemType } from '../types/typesApp';
import { CardComponent } from './CardComponent';

export const LocationList = () => {
	const list = useSelector((state: AppStateType) => state.content.data);
	
	return (
		<>
			<div className="list">
				{list?.results?.map((item: ResultsItemType) => (
					<CardComponent key={item.id} card={item} />
				))}
			</div>
		</>
	);
};