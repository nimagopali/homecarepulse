import axios from 'axios';

const addUser = payload => {
	const config = {
		method: 'POST',
		url: 'https://dev.app.homecarepulse.com/Primary/?FlowId=7423bd80-cddb-11ea-9160-326dddd3e106&Action=api',
		data: payload,
		crossdomain: true,
		withCredentials: false,
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	};
	return axios(config);
};

const getAllUsers = () => {
	const config = {
		method: 'GET',
		url: 'https://jsonplaceholder.typicode.com/users',
		crossdomain: true,
		withCredentials: true,
		headers: { 'Content-Type': 'application/json' }
	};
	return axios(config);
};

export { addUser, getAllUsers };
