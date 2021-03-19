import React from 'react';
import { Menu } from 'antd';
import Layout, { Content, Header } from 'antd/lib/layout/layout';

import {
	// eslint-disable-next-line
	BrowserRouter as Router,
	Link,
  } from "react-router-dom";

export const LayoutComponent = (props: any) => {

	return (
		<Layout className="layout">
			<Header>
				<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
					<Menu.Item key="1"><Link to="/"> Character</Link></Menu.Item>
					<Menu.Item key="2"><Link to="/Location">Location</Link></Menu.Item>
					<Menu.Item key="3"><Link to="/Episode">Episode</Link></Menu.Item>
				</Menu>
			</Header>
				<Content style={{ padding: '50px', height: 'auto'}}>
					{props.children}
				</Content>
			
		</Layout>
	);
};