import React, { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';


export const HeaderComponent: React.FC = () => {
	let location = useLocation();
	const [actualKey, setActualKey] = useState(["1"]);

	useMemo(() => {
		const keyPath =
		(location.pathname.split('/'))[1] === "character" ? ["1"] :
		(location.pathname.split('/'))[1] === "location" ? ["2"] : 
		(location.pathname.split('/'))[1] === "episode" ? ["3"] : ["1"];
		
		// console.log((location.pathname.split('/'))[1]);
		
		setActualKey(keyPath)
	}, [location.pathname]);

	return (
		<Header>
			<Menu
				theme="dark"
				mode="horizontal"
				selectedKeys={actualKey}
			>
				<Menu.Item key="1"><Link to="/character"> Character</Link></Menu.Item>
				<Menu.Item key="2"><Link to="/location">Location</Link></Menu.Item>
				<Menu.Item key="3"><Link to="/episode">Episode</Link></Menu.Item>
			</Menu>
		</Header>
	);
};