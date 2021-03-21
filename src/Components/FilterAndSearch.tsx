import React, { useEffect, useState } from 'react';
import { Input, Select } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';


export const FilterAndSearch = () => {
	const [saveLocation, setSaveLocation] = useState('');
	let location = useLocation();
	let history = useHistory();

	useEffect(() => {
		// console.log(location.search);
		// if (location.pathname === '/') {
		// 	setSaveLocation('/character');
		// 	return;
		// }
		
		
		setSaveLocation(location.pathname + location.search);
		
		// eslint-disable-next-line
	}, []);

	const { Option } = Select;

	const onSearch = (value: string): void => console.log(value);

	const handleChange = (value: string): void => {
		history.push(`${saveLocation}/?status=${value}`);
	}

	return (
		<Input.Group compact style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '40px' }}>
				<Input.Search
					style={{ width: '50%' }}
					placeholder="input search text"
					onSearch={onSearch}
					enterButton
					size="large"
					// loading={true}
				/>
				<Select onChange={handleChange} style={{ width: '15%', marginLeft: '20px' }} size="large">
					<Option value="alive">Alive</Option>
					<Option value="dead">Dead</Option>
					<Option value="unknown">unknown</Option>
				</Select>
			</Input.Group>
	);
};