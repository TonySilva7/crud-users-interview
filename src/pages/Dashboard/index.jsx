import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { WrapArticle, WrapAside, WrapMain, WrapSection } from './styles';

export default function Dashboard() {
	const [margin, setMargin] = useState(15);

	useEffect(() => {
		setMargin(0);
	}, []);

	return (
		<WrapMain>
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
					<SupervisedUserCircleRoundedIcon />
					<h1>Users</h1>
				</header>
				<WrapSection margin={margin}>
					<Link>
						<PersonAddRoundedIcon />
						<h2>Cadastrar</h2>
					</Link>
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
