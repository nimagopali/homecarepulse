import React, { useState, useEffect } from 'react';
import * as userService from './services/userService';

const User = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState({ userid: 'nimagopali@gmail.com', password: '0bb5c3052747419b9b46d84a8f0c5b7c', outputtype: 'Json', users: [] });

	useEffect(() => {
		setIsLoading(true);
		userService.getAllUsers().then(onGetAllUsersSuccess).catch(onGetAllUsersError);
	}, []);

	const onGetAllUsersSuccess = res => {
		const data = res.data;
		setData(prevState => {
			const copy = { ...prevState };
			copy.users = data.map(user => ({
				first_name: user.name.split(' ')[0],
				last_name: user.name.split(' ')[1],
				company_name: user.company.name,
				company_full_address: user.address.street + ', ' + user.address.city + ', ' + user.address.zipcode,
				website: user.website,
				phone: user.phone
			}));
			return copy;
		});
		setIsLoading(false);
	};

	const onGetAllUsersError = err => {
		console.log(err);
	};

	const onAddUserSuccess = res => {
		console.log('successful');
	};
	const onAddUserError = err => {
		console.log(err);
	};
	const addUser = users => {
		userService.addUser(users).then(onAddUserSuccess).catch(onAddUserError);
	};
	if (data.users.length > 0 && !isLoading) {
		addUser(data);
	}
	return (
		<div>
			<span>All Users: TODO for later</span>
		</div>
	);
};

export default User;
