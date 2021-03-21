import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Tooltip } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { ResultsItemType } from '../types/types';
import { changeFavorites } from '../redux/action';
import { AppStateType } from '../redux/rootReducer';

type TargetPropsType = {
	card: ResultsItemType
};

export const CardComponent: React.FC<TargetPropsType> = ({ card }) => {
	const favorites = useSelector((state: AppStateType) => state.character.favorites);
	const isFavorites = favorites[card.id];
	const dispatch = useDispatch();

	let title = !isFavorites ? "Add to favorites" : "Remove from favorites";

	useEffect(() => {
		if (!Object.keys(favorites).length) return;
		localStorage.setItem('favorites', JSON.stringify(favorites));
	}, [favorites])

	const handleClick = () => dispatch(changeFavorites(card.id));

	return (
		<Card
			hoverable
			title={card.name}
			style={{ width: 240, position: 'relative', margin: '10px', cursor: 'default'}}
			cover={<img alt="example" src={card.image}/>}
		>
			<Meta title={card.gender} description={card.status} />
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