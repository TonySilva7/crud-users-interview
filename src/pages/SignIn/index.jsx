import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import {
	default as AccountCircle,
	default as AccountCircleIcon,
} from '@material-ui/icons/AccountCircle';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoaderBalls from '../../components/LoaderBalls';
import { actionAddUserRequest, actionLoginRequest } from '../../store/modules/userReducer/actions';
import { ButtonSign, InputLogin } from '../../styles/customMUI';
import { LoginArea, LoginWrap, WrapContainer } from './styles';

export default function SignIn() {
	// const { signIn, loadingAuth } = useContext(AuthContext);
	const dispatch = useDispatch();
	const isLoading = useSelector((state) => state.userReducer.isLoading);

	const [name, setName] = useState('');
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [isChecked, setIsChecked] = useState(false);

	const [hideInputRegister, setHideInputRegister] = useState('none');

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

	const [scaleLogo, setScaleLogo] = useState(5);
	const [scaleForm, setScaleForm] = useState(0);

	useEffect(() => {
		setScaleLogo(1);
		setScaleForm(1);
	}, []);

	// Main LOGIN/REGISTER
	function handleSubmit(event) {
		event.preventDefault();
		if (isChecked) {
			handleRegister(event);
		} else {
			handleLogin(event);
		}
	}

	//LOGIN
	function handleLogin() {
		if (userNameItsOk && passwordItsOk) {
			dispatch(actionLoginRequest(userName, password));
		} else {
			alert('Dados Incorretos');
			return;
		}
	}

	// Faz Cadastro
	async function handleRegister() {
		if (nameItsOk && userNameItsOk && emailItsOk && passwordItsOk) {
			await dispatch(actionAddUserRequest(name, userName, email, password));
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
	function handleChangeName(name) {
		setName(name);
		handleNameValidation();
	}

	// Seta UserName
	function handleUserName(userName) {
		setUserName(userName);
		handleUserNameValidation();
	}

	// Seta Email
	function handleChangeMail(email) {
		setEmail(email);
		handleEmailValidation();
	}

	// Seta Senha
	function handleChangePassword(password) {
		setPassword(password);
		handlePasswordValidation();
	}

	// Seta check do checkbox
	function handleChangeCheck(check) {
		setName('');
		setUserName('');
		setEmail('');
		setPassword('');

		setHideInputRegister(check ? 'flex' : 'none');
		setIsChecked((prev) => (prev = check));
	}

	return (
		<WrapContainer>
			<main>
				<LoginArea>
					<div style={{ transform: `scale(${scaleLogo})`, transition: 'all 400ms ease' }}>
						<AccountCircleIcon
							style={{
								fill: `${
									name === '' && userName === '' && email === '' && password === ''
										? '#7a75bc'
										: !isChecked && userNameItsOk && passwordItsOk
										? '#7a75bc'
										: isChecked && nameItsOk && userNameItsOk && emailItsOk && passwordItsOk
										? '#7a75bc'
										: '#e0665d'
								}`,
							}}
						/>
					</div>
					<span></span>
				</LoginArea>

				<LoginWrap
					style={{
						transform: `scale(${scaleForm})`,
					}}
				>
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
								style={{ display: `${hideInputRegister}` }}
								onChange={(e) => handleChangeName(e.target.value)}
							/>

							<InputLogin
								id='username'
								fullWidth
								label='Usuário *'
								variant='outlined'
								type='text'
								// disabled={isChecked}
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
								// style={{
								// 	display: `${hideInputRegister}`,
								// }}
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
								style={{ display: `${hideInputRegister}` }}
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

							<FormControlLabel
								control={
									<Checkbox
										onChange={(e) => handleChangeCheck(e.target.checked)}
										name='checkedA'
										color='primary'
									/>
								}
								label='Não tenho uma conta!'
							/>
						</div>

						<ButtonSign
							type='submit'
							color='primary'
							disabled={!(userNameItsOk && passwordItsOk)}
							style={{
								transform: `translateY(${
									!isChecked && email === '' && password === ''
										? '0'
										: !isChecked && userNameItsOk && passwordItsOk
										? '0'
										: '-3'
								}rem)`,
								marginBottom: `-7rem`,
							}}
						>
							{isLoading ? <LoaderBalls size={20} fill='#eaeaec' /> : 'Acessar'}
						</ButtonSign>

						<ButtonSign
							type='submit'
							color='primary'
							disabled={!(nameItsOk && userNameItsOk && emailItsOk && passwordItsOk)}
							style={{
								transform: `translateY(${
									isChecked && name === '' && email === '' && password === ''
										? '2.7rem'
										: isChecked && nameItsOk && userNameItsOk && emailItsOk && passwordItsOk
										? '2.7rem'
										: '-1rem'
								})`,
								backgroundColor: '#344055',
							}}
						>
							{isLoading ? <LoaderBalls size={20} fill='#eaeaec' /> : 'Registrar'}
						</ButtonSign>
					</form>
				</LoginWrap>
			</main>
		</WrapContainer>
	);
}
