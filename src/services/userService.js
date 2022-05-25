import axios from 'axios';

// const payload = {
// 	userid: 'nimagopali@gmail.com',
// 	password: '0bb5c3052747419b9b46d84a8f0c5b7c',
// 	outputtype: 'Json',
// 	users: [
// 		{
// 			first_name: 'StringValue',
// 			last_name: 'StringValue',
// 			company_name: 'StringValue',
// 			company_full_address: 'Street Address, City, State, Zip',
// 			website: 'StringValue',
// 			phone: '2083567880'
// 		}
// 	]
// };

const addUser = payload => {
	const config = {
		method: 'POST',
		url: 'https://dev.app.homecarepulse.com/Primary/?FlowId=7423bd80-cddb-11ea-9160-326dddd3e106&Action=api',
		data: payload,
		crossdomain: true,
		withCredentials: true,
		headers: { 'Content-Type': 'application/json' }
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
