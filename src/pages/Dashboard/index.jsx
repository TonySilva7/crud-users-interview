import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import React from 'react';
import { Link } from 'react-router-dom';
import { WrapArticle, WrapAside, WrapMain, WrapSection } from './styles';

export default function Dashboard() {
	return (
		<WrapMain>
			<WrapAside>
				<header>
					<picture>
						<AccountCircleRoundedIcon />
					</picture>
				</header>
				<footer>lkjlskjdflksdjf</footer>
			</WrapAside>
			<WrapArticle>
				<header>Dashboard</header>
				<WrapSection>
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
									<button onClick={() => {}}>Icon</button>
									<button onClick={() => {}}>Icon</button>
									<Link to={`/dashboard`} style={{}}>
										Icon
									</Link>
								</td>
							</tr>

							<tr>
								<td data-label='Id'>001</td>
								<td data-label='Nome'>Tony Silva</td>
								<td data-label='UserName'>tony-silva</td>
								<td data-label='Email'>tony@mail.com</td>
								<td data-label='Admin'>Sim</td>
								<td data-label='#'>
									<button onClick={() => {}}>Icon</button>
									<button onClick={() => {}}>Icon</button>
									<Link to={`/dashboard`} style={{}}>
										Icon
									</Link>
								</td>
							</tr>

							<tr>
								<td data-label='Id'>001</td>
								<td data-label='Nome'>Tony Silva</td>
								<td data-label='UserName'>tony-silva</td>
								<td data-label='Email'>tony@mail.com</td>
								<td data-label='Admin'>Sim</td>
								<td data-label='#'>
									<button onClick={() => {}}>Icon</button>
									<button onClick={() => {}}>Icon</button>
									<Link to={`/dashboard`} style={{}}>
										Icon
									</Link>
								</td>
							</tr>

							<tr>
								<td data-label='Id'>001</td>
								<td data-label='Nome'>Tony Silva</td>
								<td data-label='UserName'>tony-silva</td>
								<td data-label='Email'>tony@mail.com</td>
								<td data-label='Admin'>Sim</td>
								<td data-label='#'>
									<button onClick={() => {}}>Icon</button>
									<button onClick={() => {}}>Icon</button>
									<Link to={`/dashboard`} style={{}}>
										Icon
									</Link>
								</td>
							</tr>

							<tr>
								<td data-label='Id'>001</td>
								<td data-label='Nome'>Tony Silva</td>
								<td data-label='UserName'>tony-silva</td>
								<td data-label='Email'>tony@mail.com</td>
								<td data-label='Admin'>Sim</td>
								<td data-label='#'>
									<button onClick={() => {}}>Icon</button>
									<button onClick={() => {}}>Icon</button>
									<Link to={`/dashboard`} style={{}}>
										Icon
									</Link>
								</td>
							</tr>
						</tbody>
					</table>
				</WrapSection>
			</WrapArticle>
		</WrapMain>
	);
}
