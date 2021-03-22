import { Spin } from 'antd';
import React from 'react';


export const Loader: React.FC = () => {
	return (
		<div className="wraper">
			<Spin size="large"/>
		</div>
	);
};