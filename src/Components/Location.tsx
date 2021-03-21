import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../redux/rootReducer';
import { PaginationComponent } from './PaginationComponent';

export const Location = () => {
	const list = useSelector((state: AppStateType) => state.character.charactersList);
	// eslint-disable-next-line
	const [page, setPage] = useState(1)

	const handlePage = useCallback((newPage: number) => {
		setPage(newPage)
	}, [])

	return (
		<>
		<div>Location</div>
		<PaginationComponent handlePage={handlePage} info={list.info}/>
		</>
	);
};