import InputAdornment from '@material-ui/core/InputAdornment';
import { default as AccountCircle } from '@material-ui/icons/AccountCircle';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import LoaderBalls from '../../components/LoaderBalls';
import api from '../../services/api';
import {
	actionAddUserRequest,
	actionUpdateUserRequest,
} from '../../store/modules/userReducer/actions';
import { ButtonSign, InputLogin } from '../../styles/customMUI';
import { validEmail, validName, validPass, validUserName } from '../../utils';
import InfoRegister from '../InfoRegister';
import { WrapCreateUsers, WrapUsersForm } from './styles';

export default function CreateUsers(props) {
	const dispatch = useDispatch();
	const isLoading = useSelector((state) => state.userReducer.isLoading);

	const [name, setName] = useState('');
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [nameItsOk, setNameItsOk] = useState(false);
	const [userNameItsOk, setUserNameItsOk] = useState(false);
	const [emailItsOk, setEmailItsOk] = useState(false);
	const [passwordItsOk, setPasswordItsOk] = useState(false);

	const [isLoadIcons, setIsLoadingIcons] = useState(false);

	useEffect(() => {
		async function getUserById(hasId) {
			setName('');
			setUserName('');
			setEmail('');

			if (!!hasId) {
				setIsLoadingIcons(true);
				await api.get(`/users/${hasId}`).then((res) => {
					setName(res.data.name);
					setUserName(res.data.username);
					setEmail(res.data.email);

					setEmailItsOk(true);
					setUserNameItsOk(true);
					setNameItsOk(true);

					setIsLoadingIcons(false);
				});
				return;
			}
		}

		if (props.dataButton === '') {
			setName('');
			setUserName('');
			setEmail('');
			return;
		}

		getUserById(props.dataButton);
	}, [props.dataButton]);

	// Main CREATE/UPDATE
	function handleSubmit(event) {
		event.preventDefault();

		if (!!props.dataButton) {
			handleUpdateUser(props.dataButton);
			return;
		} else {
			handleCreateUser();
			return;
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
			toast.error('Dados Incorretos');
			return;
		}
	}

	// UPDATE
	function handleUpdateUser(id) {
		if (nameItsOk && userNameItsOk && emailItsOk) {
			dispatch(actionUpdateUserRequest(id, name, userName, email, password));
			setName('');
			setUserName('');
			setEmail('');
		} else {
			toast.error('Dados Incorretos');
			return;
		}
	}

	function handleNameValidation() {
		if (validName(name)) {
			setNameItsOk(true);
		} else {
			setNameItsOk(false);
		}
	}

	function handleUserNameValidation() {
		if (validUserName(userName)) {
			setUserNameItsOk(true);
		} else {
			setUserNameItsOk(false);
		}
	}

	function handleEmailValidation() {
		if (validEmail(email)) {
			setEmailItsOk(true);
		} else {
			setEmailItsOk(false);
		}
	}

	function handlePasswordValidation() {
		if (validPass(password)) {
			setPasswordItsOk(true);
		} else {
			setPasswordItsOk(false);
		}
	}

	function handleChangeName(value) {
		setName(value);
		handleNameValidation();
	}

	function handleUserName(userName) {
		setUserName(userName);
		handleUserNameValidation();
	}

	function handleChangeMail(value) {
		setEmail(value);
		handleEmailValidation();
	}

	function handleChangePassword(value) {
		setPassword(value);
		handlePasswordValidation();
	}

	function handleModal() {
		setName('');
		setUserName('');
		setEmail('');
		setPassword('');
		props.handleReqBtn('');
	}

	return (
		<WrapCreateUsers display={props.display}>
			<header>
				<SupervisedUserCircleRoundedIcon style={{ fontSize: '4rem', color: '#d9d9e4' }} />
				<button onClick={handleModal}>
					<CancelRoundedIcon />
				</button>
			</header>
			<WrapUsersForm>
				<form onSubmit={(e) => handleSubmit(e)}>
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
										{isLoadIcons ? (
											<LoaderBalls size={20} fill={'#7a75bc'} />
										) : (
											<AccountCircle
												style={{
													fill: `${name === '' ? '#7a75bc' : nameItsOk ? '#7a75bc' : '#e0665d'}`,
												}}
											/>
										)}
									</InputAdornment>
								),
							}}
							value={name}
							onChange={(e) => handleChangeName(e.target.value)}
						/>
						<InfoRegister
							hasError={name.length >= 1 && nameItsOk === false}
							message='Insira Nome e Sobrenome'
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
										{isLoadIcons ? (
											<LoaderBalls size={20} fill={'#7a75bc'} />
										) : (
											<PersonRoundedIcon
												style={{
													fill: `${
														userName === '' ? '#7a75bc' : userNameItsOk ? '#7a75bc' : '#e0665d'
													}`,
												}}
											/>
										)}
									</InputAdornment>
								),
							}}
							value={userName}
							onChange={(e) => handleUserName(e.target.value)}
						/>
						<InfoRegister
							hasError={userName.length >= 1 && userNameItsOk === false}
							message='Apenas letras minúsculas e números.'
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
										{isLoadIcons ? (
											<LoaderBalls size={20} fill={'#7a75bc'} />
										) : (
											<EmailRoundedIcon
												style={{
													fill: `${email === '' ? '#7a75bc' : emailItsOk ? '#7a75bc' : '#e0665d'}`,
												}}
											/>
										)}
									</InputAdornment>
								),
							}}
							value={email}
							onChange={(e) => handleChangeMail(e.target.value)}
						/>
						<InfoRegister
							hasError={email.length >= 1 && emailItsOk === false}
							message='Insira um email válido.'
						/>

						<InputLogin
							id='password'
							label='Senha *'
							value={password}
							fullWidth
							variant='outlined'
							type='password'
							autoComplete='current-password'
							style={{
								display: `${props.title === 'Atualizar' ? 'none' : 'flex'}`,
							}}
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
						<InfoRegister
							hasError={password.length >= 1 && passwordItsOk === false}
							message='Insira pelo menos 8 dígitos, incluindo caracter especial e alguma letra
								maíuscula.'
						/>
					</div>

					<ButtonSign
						type='submit'
						color='primary'
						disabled={!(nameItsOk && emailItsOk)}
						style={{
							transform: `translateY(${
								name === '' && userName === '' && email === ''
									? '-0.4rem'
									: nameItsOk && userNameItsOk && emailItsOk
									? '-0.4rem'
									: '-3rem'
							})`,
							backgroundColor: '#7a75bc',
							marginTop: '0rem',
						}}
					>
						{isLoading ? <LoaderBalls size={20} fill='#eaeaec' /> : `${props.title}`}
					</ButtonSign>
				</form>
			</WrapUsersForm>
		</WrapCreateUsers>
	);
}
