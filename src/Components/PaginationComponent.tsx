import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Pagination } from 'antd';
import { InfoType, LocationType } from '../types/typesApp';
import { formationOfParams } from './Functions/functions';

type TargetPropsType = {info: InfoType};

export const PaginationComponent: React.FC<TargetPropsType & LocationType> = props => {
	const [currentPage, setCurrentPage] = useState(1);
	const location = useLocation();
	const history = useHistory();

	const { children, info, ...locationNew } = props;
	
	useEffect(() => {
		if (!location.search) setCurrentPage(1);
		else setCurrentPage(props.page);
		// eslint-disable-next-line
	}, [props.page]);

	const handleChange = (page: number): void => {
		locationNew.page =  page;
		const params: string = formationOfParams({ ...locationNew });
		history.push(params);
	};

	return (
		<div className="pagination">
			<Pagination
				style={{ margin: '0 0 100px 0', paddingBottom: '50px' }}
				showSizeChanger={false}
				onChange={handleChange}
				current={+currentPage}
				defaultCurrent={1}
				total={props.info?.pages ? props.info?.pages * 10 : 40}
			/>
		</div>
	);
};

