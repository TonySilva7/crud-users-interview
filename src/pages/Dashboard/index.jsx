import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import CreateUsers from '../../components/CreateUsers';
import LoaderBalls from '../../components/LoaderBalls';
import api from '../../services/api';
import { actionDeleteUserRequest, actionLogout } from '../../store/modules/userReducer/actions';
import { WrapArticle, WrapAside, WrapMain, WrapSection } from './styles';

export default function Dashboard() {
	const myToken = useSelector((state) => state.userReducer.token);
	const username = useSelector((state) => state.userReducer.user.username);
	const dispatch = useDispatch();

	const [margin, setMargin] = useState(15);
	const [display, setDisplay] = useState('none');
	const [users, setUsers] = useState([]);
	const [dataButton, setDataButton] = useState('');
	const isLoading = useSelector((state) => state.userReducer.isLoading);
	const [isLoadingDataTable, setIsLoadingDataTable] = useState(false);

	useEffect(() => {
		setMargin(0);
		toast.success(`Seja Bem Vindo(a) ${username} 😊`, {
			position: toast.POSITION.BOTTOM_LEFT,
		});
	}, [username]);

	useEffect(() => {
		async function getAllUsers() {
			setIsLoadingDataTable(true);

			api.defaults.headers.token = myToken;

			await api
				.get('/users')
				.then((response) => setUsers(response.data))
				.catch((err) => alert(err));

			setIsLoadingDataTable(false);
		}

		getAllUsers();
	}, [myToken, isLoading]);

	function handleDisplay() {
		setDisplay((prev) => (prev === 'none' ? 'flex' : 'none'));
	}

	function handleRequestButton(data) {
		setDataButton(data);
		handleDisplay();
	}

	return (
		<WrapMain>
			<CreateUsers
				handleReqBtn={handleRequestButton}
				dataButton={dataButton}
				display={display}
				handleDisplay={handleDisplay}
				title={!!dataButton ? 'Atualizar' : 'Salvar'}
			/>

			<span style={{ display: `${display}` }}></span>

			<WrapAside margin={margin}>
				<header>
					<picture>
						<AccountCircleRoundedIcon />
					</picture>
				</header>
				<footer>
					<div>
						<p>Bem vindo(a), </p>
						<h3>{username}</h3>
					</div>
					<button onClick={() => dispatch(actionLogout('', ''))}>
						Sair <ExitToAppRoundedIcon />
					</button>
				</footer>
			</WrapAside>
			<WrapArticle margin={margin}>
				<header>
					<SettingsRoundedIcon />
					<h1>Usuários</h1>
				</header>
				<WrapSection margin={margin}>
					{/* <button onClick={() => handleRequestButton('create')}> */}
					<button onClick={() => handleRequestButton('')}>
						<PersonAddRoundedIcon />
						<h2>Cadastrar</h2>
					</button>
					{isLoadingDataTable ? (
						<div>
							<LoaderBalls size={30} fill='#7a75bc' />
						</div>
					) : (
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
										</td>
									</tr>
								))}
							</tbody>
						</table>
					)}
				</WrapSection>
			</WrapArticle>
		</WrapMain>
	);
}
