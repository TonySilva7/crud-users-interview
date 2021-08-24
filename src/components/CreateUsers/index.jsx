import InputAdornment from '@material-ui/core/InputAdornment';
import { default as AccountCircle } from '@material-ui/icons/AccountCircle';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoaderBalls from '../../components/LoaderBalls';
import { actionAddUserRequest } from '../../store/modules/userReducer/actions';
import { ButtonSign, InputLogin } from '../../styles/customMUI';
import { WrapCreateUsers, WrapUsersForm } from './styles';

export default function CreateUsers(props) {
	const dispatch = useDispatch();
	const isLoading = useSelector((state) => state.userReducer.isLoading);

	const [name, setName] = useState('');
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const rgxName = /[A-Z][a-z]* [A-Z][a-z]*/;
	const rgxUserName = /^[a-z0-9]+(?:[ _-][a-z0-9]+)*$/;
	const rgxMail =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const rgxPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\])]).{8,}$/g;

	const validName = name.match(rgxName) && name !== '' && name.length >= 3;
	const validUserName = userName.match(rgxUserName) && userName !== '' && userName.length >= 3;
	const validEmail = email !== '' && email.match(rgxMail);
	const validPass = password !== '' && password.match(rgxPassword);

	const [nameItsOk, setNameItsOk] = useState(false);
	const [userNameItsOk, setUserNameItsOk] = useState(false);
	const [emailItsOk, setEmailItsOk] = useState(false);
	const [passwordItsOk, setPasswordItsOk] = useState(false);

	// Main CREATE/UPDATE
	function handleSubmit(event) {
		event.preventDefault();

		if (props.action === '') {
			return;
		}
		if (props.action === 'create') {
			handleCreateUser(event);
			return;
		} else {
			handleUpdateUser(event);
		}
	}

	//CREATE
	function handleCreateUser() {
		if (nameItsOk && userNameItsOk && emailItsOk && passwordItsOk) {
			dispatch(actionAddUserRequest(name, userName, email, password));
			setName('');
			setUserName('');
			setEmail('');
			setPassword('');
		} else {
			alert('Dados Incorretos');
			return;
		}
	}

	// Faz Cadastro
	function handleUpdateUser() {
		alert('Atualizando usuário...');

		if (nameItsOk && userNameItsOk && emailItsOk && passwordItsOk) {
			dispatch(actionAddUserRequest(props.action, name, userName, email, password));
			setName('');
			setUserName('');
			setEmail('');
			setPassword('');
		} else {
			alert('Dados Incorretos');
			return;
		}
	}

	function handleNameValidation() {
		if (validName) {
			setNameItsOk(true);
		} else {
			setNameItsOk(false);
		}
	}

	function handleUserNameValidation() {
		if (validUserName) {
			setUserNameItsOk(true);
		} else {
			setUserNameItsOk(false);
		}
	}

	function handleEmailValidation() {
		if (validEmail) {
			setEmailItsOk(true);
		} else {
			setEmailItsOk(false);
		}
	}

	function handlePasswordValidation() {
		if (validPass) {
			setPasswordItsOk(true);
		} else {
			setPasswordItsOk(false);
		}
	}

	// Seta Name
	function handleChangeName(value) {
		setName(value);
		handleNameValidation();
	}

	// Seta UserName
	function handleUserName(userName) {
		setUserName(userName);
		handleUserNameValidation();
	}

	// Seta Email
	function handleChangeMail(value) {
		setEmail(value);
		handleEmailValidation();
	}

	// Seta Senha
	function handleChangePassword(value) {
		setPassword(value);
		handlePasswordValidation();
	}

	return (
		<WrapCreateUsers display={props.display}>
			<header>
				<SupervisedUserCircleRoundedIcon style={{ fontSize: '4rem', color: '#d9d9e4' }} />
				<button onClick={props.handleModal}>
					<CancelRoundedIcon />
				</button>
			</header>
			<WrapUsersForm>
				<form onSubmit={handleSubmit}>
					<div>
						<InputLogin
							id='name'
							fullWidth
							label='Nome *'
							variant='outlined'
							type='text'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<AccountCircle
											style={{
												fill: `${name === '' ? '#7a75bc' : nameItsOk ? '#7a75bc' : '#e0665d'}`,
											}}
										/>
									</InputAdornment>
								),
							}}
							value={name}
							onChange={(e) => handleChangeName(e.target.value)}
						/>

						<InputLogin
							id='username'
							fullWidth
							label='Usuário *'
							variant='outlined'
							type='text'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<PersonRoundedIcon
											style={{
												fill: `${
													userName === '' ? '#7a75bc' : userNameItsOk ? '#7a75bc' : '#e0665d'
												}`,
											}}
										/>
									</InputAdornment>
								),
							}}
							value={userName}
							onChange={(e) => handleUserName(e.target.value)}
						/>

						<InputLogin
							id='email'
							fullWidth
							label='Email *'
							variant='outlined'
							type='text'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<EmailRoundedIcon
											style={{
												fill: `${email === '' ? '#7a75bc' : emailItsOk ? '#7a75bc' : '#e0665d'}`,
											}}
										/>
									</InputAdornment>
								),
							}}
							value={email}
							onChange={(e) => handleChangeMail(e.target.value)}
						/>

						<InputLogin
							id='password'
							label='Senha *'
							value={password}
							fullWidth
							variant='outlined'
							type='password'
							autoComplete='current-password'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<LockRoundedIcon
											style={{
												fill: `${
													password === '' ? '#7a75bc' : passwordItsOk ? '#7a75bc' : '#e0665d'
												}`,
											}}
										/>
									</InputAdornment>
								),
							}}
							onChange={(e) => handleChangePassword(e.target.value)}
						/>
					</div>

					<ButtonSign
						type='submit'
						color='primary'
						disabled={!(nameItsOk && emailItsOk && passwordItsOk)}
						style={{
							transform: `translateY(${
								name === '' && userName === '' && email === '' && password === ''
									? '-0.4rem'
									: nameItsOk && userNameItsOk && emailItsOk && passwordItsOk
									? '-0.4rem'
									: '-3rem'
							})`,
							backgroundColor: '#7a75bc',
							marginTop: '0rem',
						}}
					>
						{isLoading ? <LoaderBalls size={20} fill='#eaeaec' /> : 'Salvar'}
					</ButtonSign>
				</form>
			</WrapUsersForm>
		</WrapCreateUsers>
	);
}
