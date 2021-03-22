import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Pagination } from 'antd';
import { InfoType } from '../types/types';

type TargetPropsType = {
	info: InfoType
	pathname: string
	page: number
	name: string
	status: string
};

export const PaginationComponent: React.FC<TargetPropsType> = props => {
	const [currentPage, setCurrentPage] = useState(1);
	let location = useLocation();
	let history = useHistory();
	
	useEffect(() => {
		if (!location.search) setCurrentPage(1);
		else setCurrentPage(props.page);
		// eslint-disable-next-line
	}, [props.page]);

	const handleChange = (page: number) => 
		history.push(`${props.pathname}/?page=${page}&name=${props.name}&status=${props.status}`);


	return (
		<div className="pagination">
			<Pagination
				style={{ margin: '0 0 100px 0', padding: '50px 0 50px 0' }}
				showSizeChanger={false}
				onChange={handleChange}
				current={currentPage}
				defaultCurrent={1}
				total={props.info?.count ? props.info?.count / 2 : 40}
			/>
		</div>
	);
};

