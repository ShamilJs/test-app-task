import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Tooltip } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { ResultsItemType } from '../types/typesApp';
import { changeFavorites } from '../redux/action';
import { AppStateType } from '../redux/rootReducer';
import { useLocation } from 'react-router-dom';

type TargetPropsType = {
	card: ResultsItemType
};

export const CardComponent: React.FC<TargetPropsType> = ({ card }) => {
	const favorites = useSelector((state: AppStateType) => state.content.favorites);
	const dispatch = useDispatch();
	const location = useLocation();
	const isFavorites = favorites[card.id + location.pathname];

	let title = !isFavorites ? "Add to favorites" : "Remove from favorites";

	useEffect(() => {
		if (!Object.keys(favorites).length) return;
		localStorage.setItem('favorites', JSON.stringify(favorites));
	}, [favorites]);

	const handleClick = () => dispatch(changeFavorites(card.id + location.pathname));

	return (
		<Card
			hoverable
			title={card.name}
			style={{ width: 240, position: 'relative', margin: '10px', cursor: 'default'}}
			cover={card.image ? <img alt="example" src={card.image}/>: null}
		>
			<Meta 
				title={card.gender ? card.gender : card.type}
				description={card.status ? card.status : card.dimension}
			/>
			<Tooltip title={title}>
				<img
					src="/favorites.png"
					alt="21"
					onClick={handleClick}
					className={isFavorites ? 'favorites-img hover-img' : 'favorites-img'}
				/>
			</Tooltip>
		</Card>
	);
};