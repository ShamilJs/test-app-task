import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Pagination } from 'antd';
import { InfoType } from '../types/types';

type TargetPropsType = {
	handlePage: (newPage: number) => void
	info: InfoType
};

export const PaginationComponent: React.FC<TargetPropsType> = ({ handlePage, info }) => {
	const [saveLocation, setSaveLocation] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	
	let location = useLocation();
	let history = useHistory();
	
	useEffect(() => {
		setSaveLocation(location.pathname);
		// history.push(`${location.pathname}/?page=1`)
		// eslint-disable-next-line
	}, []);
	
	useEffect(() => {
		let locationSearch = +(location.search.split('page='))[(location.search.split('page=')).length-1];
		if (!location.search) setCurrentPage(1);
		else setCurrentPage(locationSearch);
		handlePage(locationSearch);
		// eslint-disable-next-line
	}, [location.search]);

	const handleChange = (page: number) => history.push(`${saveLocation}/?page=${page}`);

	return (
		<div className="pagination">
			<Pagination
				style={{ margin: '0 0 100px 0', padding: '50px 0 50px 0' }}
				showSizeChanger={false}
				onChange={handleChange}
				current={currentPage}
				defaultCurrent={1}
				total={info?.count ? info?.count / 2 : 40}
			/>
		</div>
	);
};

