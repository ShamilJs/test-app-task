import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharactersListFromServer } from '../redux/action';
import { AppStateType } from '../redux/rootReducer';
import { ResultsItemType } from '../types/types';
import { PaginationComponent } from './PaginationComponent';

export const CharactersList = () => {
	const list = useSelector((state: AppStateType) => state.character.charactersList.results)
	const dispatch = useDispatch()



	useEffect(() => {
		dispatch(getCharactersListFromServer(1))
		// eslint-disable-next-line
	}, [])
	
	return (
		<>
		<div className="list">
			{list?.map((item: ResultsItemType) => (
				<Card
					// hoverable
					title={item.name}
					style={{ width: 240, position: 'relative', margin: '10px' }}
					cover={
						<img
							alt="example"
							src={item.image}
						/>
					}
					key={item.id}
				>
					<Meta title="Europe Street beat" description="www.instagram.com" />
				</Card>
			))}
			
		</div>
		<PaginationComponent/>
		</>
	);
};