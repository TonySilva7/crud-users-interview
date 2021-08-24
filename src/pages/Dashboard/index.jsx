import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import React, { useEffect, useState } from 'react';
// -----------------------------------------------------------------------
import { useDispatch, useSelector } from 'react-redux';
// -----------------------------------------------------------------------
import { Link } from 'react-router-dom';
import CreateUsers from '../../components/CreateUsers';
import api from '../../services/api';
import { actionDeleteUserRequest } from '../../store/modules/userReducer/actions';
// -----------------------------------------------------------------------
import { WrapArticle, WrapAside, WrapMain, WrapSection } from './styles';

export default function Dashboard() {
	// -----------------------------------------------------------------------
	const myToken = useSelector((state) => state.userReducer.token);
	const dispatch = useDispatch();
	// -----------------------------------------------------------------------
	const [margin, setMargin] = useState(15);
	const [display, setDisplay] = useState('none');
	const [users, setUsers] = useState([]);
	const [dataButton, setDataButton] = useState('');
	const isLoading = useSelector((state) => state.userReducer.isLoading);

	useEffect(() => {
		setMargin(0);
	}, []);

	useEffect(() => {
		//.... REQUISIÇÃO AQUI!!!!
		async function getAllUsers() {
			api.defaults.headers.token = myToken;

			await api
				.get('/users')
				.then((response) => setUsers(response.data))
				.catch((err) => alert(err));
		}

		getAllUsers();
	}, [myToken, isLoading]);

	function handleRequestButton(data) {
		setDataButton(data);
		setDisplay((prev) => (prev === 'none' ? 'flex' : 'none'));
	}

	return (
		<WrapMain>
			<CreateUsers
				handleReqBtn={handleRequestButton}
				display={display}
				dataButton={dataButton}
				title={dataButton === 'create' ? 'Salvar' : 'Atualizar'}
			/>

			<WrapAside margin={margin}>
				<header>
					<picture>
						<AccountCircleRoundedIcon />
					</picture>
				</header>
				<footer>
					<div>
						<p>Bem vindo, </p>
						<h3>Tony</h3>
					</div>
					<Link to='/'>
						Sair <ExitToAppRoundedIcon />
					</Link>
				</footer>
			</WrapAside>
			<WrapArticle margin={margin}>
				<header>
					<SettingsRoundedIcon />
					<h1>Users</h1>
				</header>
				<WrapSection margin={margin}>
					<button onClick={() => handleRequestButton('create')}>
						<PersonAddRoundedIcon />
						<h2>Cadastrar</h2>
					</button>
					<table>
						<thead>
							<tr>
								<th scope='col'>Id</th>
								<th scope='col'>Nome</th>
								<th scope='col'>UserName</th>
								<th scope='col'>Email</th>
								<th scope='col'>Admin</th>
								<th scope='col'>#</th>
							</tr>
						</thead>

						<tbody>
							{users.map((user) => (
								<tr key={user._id}>
									<td data-label='Id'>
										{user._id.substr(0, 3) + '...' + user._id.substr(user._id.length - 3)}
									</td>
									<td data-label='Nome'>{user.name}</td>
									<td data-label='UserName'>{user.username}</td>
									<td data-label='Email'>{user.email}</td>
									<td data-label='Admin'>{user.admin ? 'Sim' : 'Não'}</td>
									<td data-label='#'>
										<button onClick={() => handleRequestButton(user._id)}>
											<CreateRoundedIcon />
										</button>
										<button onClick={() => dispatch(actionDeleteUserRequest(user._id))}>
											<DeleteForeverRoundedIcon />
										</button>
										{/* <Link to={`/dashboard`} style={{}}>
										Icon
									</Link> */}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</WrapSection>
			</WrapArticle>
		</WrapMain>
	);
}
