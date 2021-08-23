import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import React, { useEffect, useState } from 'react';
// -----------------------------------------------------------------------
import { useDispatch, useSelector } from 'react-redux';
// -----------------------------------------------------------------------
import { Link } from 'react-router-dom';
import CreateUsers from '../../components/CreateUsers';
// -----------------------------------------------------------------------
import { actionAddUserRequest } from '../../store/modules/userReducer/actions';
// -----------------------------------------------------------------------
import { WrapArticle, WrapAside, WrapMain, WrapSection } from './styles';

export default function Dashboard() {
	// -----------------------------------------------------------------------
	const myNumber = useSelector((state) => state.userReducer.value);
	const dispatch = useDispatch();
	// -----------------------------------------------------------------------
	const [margin, setMargin] = useState(15);
	const [display, setDisplay] = useState('none');

	useEffect(() => {
		setMargin(0);
	}, []);

	useEffect(() => {
		//.... REQUISIÇÃO AQUI!!!!
	}, []);

	function handleModal() {
		setDisplay((prev) => (prev === 'none' ? 'flex' : 'none'));
	}

	return (
		<WrapMain>
			<CreateUsers handleModal={handleModal} display={display} />

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
					{/* -------------------------------------------------- */}
					<h1>Count: {myNumber} </h1>
					<button onClick={() => dispatch(actionAddUserRequest('oi'))}>Somar</button>
					{/* -------------------------------------------------- */}
				</footer>
			</WrapAside>
			<WrapArticle margin={margin}>
				<header>
					<SettingsRoundedIcon />
					<h1>Users</h1>
				</header>
				<WrapSection margin={margin}>
					<button onClick={handleModal}>
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
							<tr>
								<td data-label='Id'>001</td>
								<td data-label='Nome'>Tony Silva</td>
								<td data-label='UserName'>tony-silva</td>
								<td data-label='Email'>tony@mail.com</td>
								<td data-label='Admin'>Sim</td>
								<td data-label='#'>
									<button onClick={handleModal}>
										<CreateRoundedIcon />
									</button>
									<button onClick={() => {}}>
										<DeleteForeverRoundedIcon />
									</button>
									{/* <Link to={`/dashboard`} style={{}}>
										Icon
									</Link> */}
								</td>
							</tr>

							<tr>
								<td data-label='Id'>001</td>
								<td data-label='Nome'>Tony Silva</td>
								<td data-label='UserName'>tony-silva</td>
								<td data-label='Email'>tony@mail.com</td>
								<td data-label='Admin'>Sim</td>
								<td data-label='#'>
									<button onClick={() => {}}>
										<CreateRoundedIcon />
									</button>
									<button onClick={() => {}}>
										<HighlightOffRoundedIcon />
									</button>
									{/* <Link to={`/dashboard`} style={{}}>
										Icon
									</Link> */}
								</td>
							</tr>

							<tr>
								<td data-label='Id'>001</td>
								<td data-label='Nome'>Tony Silva</td>
								<td data-label='UserName'>tony-silva</td>
								<td data-label='Email'>tony@mail.com</td>
								<td data-label='Admin'>Sim</td>
								<td data-label='#'>
									<button onClick={() => {}}>
										<CreateRoundedIcon />
									</button>
									<button onClick={() => {}}>
										<HighlightOffRoundedIcon />
									</button>
									{/* <Link to={`/dashboard`} style={{}}>
										Icon
									</Link> */}
								</td>
							</tr>

							<tr>
								<td data-label='Id'>001</td>
								<td data-label='Nome'>Tony Silva</td>
								<td data-label='UserName'>tony-silva</td>
								<td data-label='Email'>tony@mail.com</td>
								<td data-label='Admin'>Sim</td>
								<td data-label='#'>
									<button onClick={() => {}}>
										<CreateRoundedIcon />
									</button>
									<button onClick={() => {}}>
										<HighlightOffRoundedIcon />
									</button>
									{/* <Link to={`/dashboard`} style={{}}>
										Icon
									</Link> */}
								</td>
							</tr>
						</tbody>
					</table>
				</WrapSection>
			</WrapArticle>
		</WrapMain>
	);
}
