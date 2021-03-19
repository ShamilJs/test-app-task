import { Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const PaginationComponent = () => {
	let location = useLocation()
	console.log(location.pathname);
	const [pageNumber, setPageNumber] = useState(1)
	// let pageNumber: any = JSON.parse(localStorage.getItem('cart') || '')
	console.log(pageNumber);
	
	useEffect(() => {
		if (!localStorage.getItem(`${location.pathname}`) || '') {
			localStorage.setItem(`${location.pathname}`, JSON.stringify(pageNumber));
		} else {
			setPageNumber(+JSON.parse(localStorage.getItem(`${location.pathname}`) || ''))
		}
		// eslint-disable-next-line 
	}, [])

	const handleChange = (page: number) => {
		setPageNumber(pageNumber => page)
		localStorage.setItem(`${location.pathname}`, JSON.stringify(page));
	}

	return (
		<div className="pagination">
			<Pagination
				style={{ margin: '0 0 100px 0', padding: '50px 0 50px 0' }}
				showSizeChanger={false}
				onChange={handleChange}
				defaultCurrent={pageNumber}
				total={500}
			/>
		</div>
		)
	}