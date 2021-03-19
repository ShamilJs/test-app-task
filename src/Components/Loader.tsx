import { Spin } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../redux/rootReducer';



export const Loader: React.FC = () => {
	const isLoader = useSelector((state: AppStateType) => state.app.isloader);

	if (!isLoader) return null;

	return (
		<div className="wraper">
			<Spin size="large"/>
		</div>
	);
};