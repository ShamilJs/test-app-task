import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharactersListFromServer } from '../redux/action';
import { AppStateType } from '../redux/rootReducer';
import { ResultsItemType } from '../types/types';
import { PaginationComponent } from './PaginationComponent';
import { CardComponent } from './CardComponent';


export const CharactersList: React.FC = () => {
	const list = useSelector((state: AppStateType) => state.character.charactersList)
	const dispatch = useDispatch()
	const [page, setPage] = useState(1)

	useEffect(() => {
		dispatch(getCharactersListFromServer(page))
		// eslint-disable-next-line
	}, [page])

	const handlePage = useCallback((newPage: number) => {
		setPage(newPage)
	}, [])
	
	return (
		<>
			<div className="list">
				{list?.results?.map((item: ResultsItemType) => (
					<CardComponent key={item.id} card={item} />
				))}
			</div>
			{/* <PaginationComponent handlePage={handlePage} info={list.info}/> */}
		</>
	);
};