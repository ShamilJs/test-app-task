import React, { useEffect, useState } from 'react';
import Layout, { Content } from 'antd/lib/layout/layout';
import { HeaderComponent } from './HeaderComponent';
import { FilterAndSearch } from './FilterAndSearch';
import { getCharactersListFromServer } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { AppStateType } from '../redux/rootReducer';

type LayoutComponentType = {
	children: JSX.Element | JSX.Element[]
};

export const LayoutComponent: React.FC<LayoutComponentType> = props => {
	const params = useSelector((state: AppStateType) => state.app.params);
	const updateParams = useSelector((state: AppStateType) => state.app.isloader);
	let history = useHistory();
	let location = useLocation();

	useEffect(() => { 
		if (location.pathname === '/') return;
		history.push(`${location.pathname}${params}`)
	}, [updateParams])


	console.log('location', location)
	return (
		<Layout className="layout">
			<HeaderComponent/>
			<Content style={{ padding: '50px' }}>
			{/* <FilterAndSearch/> */}
				{props.children}
			</Content>
		</Layout>
	);
};