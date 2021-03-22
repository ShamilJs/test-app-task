import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input } from 'antd';
import { formationOfParams } from './Functions/functions';
import { SelectComponent } from './SelectComponent';
import { LocationType } from '../types/typesApp';


export const FilterAndSearch: React.FC<LocationType> = props => {
	let history = useHistory();
	const [value, setValue] = useState('');

	const { children, ...location } = props;

	useEffect(() => {
		setValue(props.name);
		// eslint-disable-next-line
	}, [location.name])

	const currentLocation = (): void => {
		location.page =  1;
		const params: string = formationOfParams({ ...location });
		history.push(params);
	};

	const onSearch = (value: string): void => {
		location.name =  value;
		currentLocation();
	};

	return (
		<Input.Group compact
			style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px'}}>
			<Input.Search
				style={{ width: '50%' }}
				placeholder="input search text"
				onSearch={onSearch}
				enterButton
				size="large"
				allowClear={true}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			{location.pathname === '/character' ?
				<><SelectComponent
					{...props}
					options={['not selected', 'alive', 'dead', 'unknown']}
					filterName='status'
					value={props.status}
				/>
				<SelectComponent
					{...props}
					options={['not selected', 'female', 'male', 'genderless', 'unknown']}
					filterName='gender'
					value={props.gender}
				/></> : null
			}
		</Input.Group>
	);
};