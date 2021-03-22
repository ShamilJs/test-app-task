import React from 'react';
import Layout, { Content } from 'antd/lib/layout/layout';
import { HeaderComponent } from './HeaderComponent';

type LayoutComponentType = {
	children: JSX.Element | JSX.Element[]
};

export const LayoutComponent: React.FC<LayoutComponentType> = props => {

	return (
		<Layout className="layout">
			<HeaderComponent/>
			<Content style={{ padding: '50px' }}>
				{props.children}
			</Content>
		</Layout>
	);
};