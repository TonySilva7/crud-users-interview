import React, { useState } from 'react';
import api from '../../services/api';

export default function Dashboard() {
	const [token, setToken] = useState('');

	async function setUsers() {
		const response = await api.post(`users`, {
			name: 'Sofy Dog',
			username: 'sofy-dog',
			email: 'sofy@mail.com',
			password: '123456',
		});
		console.log(response);
	}

	async function login() {
		const response = await api.post('/auth', {
			username: 'sofy-dog',
			password: '123456',
		});

		setToken(response.data.token);
		console.log(response);
	}

	async function getUsers() {
		console.log(api);

		api.defaults.headers.token = token;
		const response = await api
			.get('/users')
			.then((response) => response.data)
			.catch((err) => alert(err));

		// const response = await api
		// 	.get('/users', { headers: { token: token } })
		// 	.then((response) => response.data)
		// 	.catch((err) => alert(err));

		console.log(response);
	}

	async function getUsersById() {
		console.log(api);

		api.defaults.headers.token = token;
		const response = await api
			.get('/users/611ea6168e27664a9d7f7f30')
			.then((response) => response.data)
			.catch((err) => alert(err));
		console.log(response);
	}

	return (
		<div>
			<button onClick={setUsers}>Criar User</button>
			<button onClick={login}>Logar</button>
			<button onClick={getUsers}>Obter Users</button>
			<button onClick={getUsersById}>Obter Users por ID</button>
		</div>
	);
}
