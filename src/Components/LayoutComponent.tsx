import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Layout, { Content } from 'antd/lib/layout/layout';
import { Alert } from 'antd';
import { HeaderComponent } from './HeaderComponent';
import { getDataListFromServer } from '../redux/action';
import { FilterAndSearch } from './FilterAndSearch';
import { PaginationComponent } from './PaginationComponent';
import { AppStateType } from '../redux/rootReducer';
import { Loader } from './Loader';


type LayoutComponentType = {children: JSX.Element | JSX.Element[]};

const stateLocation = {
	page: 1,
	name: '',
	status: '',
	gender: ''
};
const filter = ['page', 'name', 'status', 'gender'];


export const LayoutComponent: React.FC<LayoutComponentType> = props => {
	const app = useSelector((state: AppStateType) => state.app);
	const list = useSelector((state: AppStateType) => state.content.data);
	const dispatch = useDispatch();
	const location = useLocation();
	
	const [saveLocation, setSaveLocation] =
		useState({
			pathname: '',
			...stateLocation
		});
		
	useEffect(() => {
		let pathname = '/' + (location.pathname.split('/'))[1];
		if (!location.search) {
			setSaveLocation({ pathname, ...stateLocation});
			return;
		};

		let arr = {...stateLocation};
		
		location.search.split('&').forEach(item => {
			filter.forEach(elem => {
				if (item.includes(elem)) arr = {...arr, [elem]: item.split(`${elem}=`)[1]} 
			});
		});
		
		setSaveLocation({
			pathname,
			page: arr.page ?? 1,
			name: arr.name ?? '',
			status: arr.status ?? '',
			gender: arr.gender ?? ''
		});
		// eslint-disable-next-line
	}, [location]);

	useEffect(() => {
		dispatch(getDataListFromServer({ ...saveLocation }));
		// eslint-disable-next-line
	}, [saveLocation]);


	return (
		<Layout className="layout">
			<HeaderComponent/>
			{(saveLocation.pathname !== '/episode') ? <FilterAndSearch { ...saveLocation }/> : null}
			{app.isError ?
				<Alert
					message="Error"
					description={app.errorMessage}
					type="error"
					showIcon
					style={{ margin: '20px 160px' }}
				/> :
				app.isloader ? <Loader/> :
				<><Content style={{ padding: '50px' }}>
					{ props.children }
				</Content>
				{(saveLocation.pathname !== '/episode') ? <PaginationComponent
					info={list.info}
					{ ...saveLocation }
				/> : null}
				</>
			}
		</Layout>
	);
};