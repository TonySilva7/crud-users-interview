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
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoaderBalls from '../../components/LoaderBalls';
import { ButtonLogin, InputLogin } from './customMUI';
import { LoginArea, LoginWrap, WrapContainer } from './styles';

export default function SignIn() {
	// const { signIn, loadingAuth } = useContext(AuthContext);
	const [name, setName] = useState('');
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [isChecked, setIsChecked] = useState(false);
	const [loadingAuth, setLoadingAuth] = useState(false);

	const [nameItsOk, setNameItsOk] = useState(true);
	const [emailItsOk, setEmailItsOk] = useState(true);
	const [passwordItsOk, setPasswordItsOk] = useState(true);

	const [hideInputRegister, setHideInputRegister] = useState('none');

	const history = useHistory();

	const rgxName = /[A-Z][a-z]* [A-Z][a-z]*/;
	const rgxMail =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const rgxPassword =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\])]).{8,}$/g;

	const validName = name.match(rgxName) && name !== '' && name.length >= 3;
	const validEmail = email !== '' && email.match(rgxMail);
	const validPass = password !== '' && password.match(rgxPassword);

	//LOGIN
	function handleLogin(event) {
		alert('Fazendo login...');
		if (validEmail) {
			setEmailItsOk(true);
			if (validPass) {
				setPasswordItsOk(true);
				history.push('/dashboard');
				// Chamar a função que validará senha e email com o servidor
				// signIn(email, password);
			} else {
				setPasswordItsOk(false);
				alert('Sua senha precisa ter mais de 8 dígitos');
				return;
			}
		} else {
			setEmailItsOk(false);
			alert('Email Inválido');
			return;
		}
	}

	// Faz Cadastro
	function handleRegister(event) {
		alert('Criando usuário...');
		if (validName) {
			// setNameItsOk(true);
		} else {
			// setNameItsOk(false);
		}

		if (email !== '' && validEmail) {
			setEmailItsOk(true);
			if (password !== '' && validPass) {
				setPasswordItsOk(true);
				history.push('/dashboard');
				// Chamar a função que validará senha e email com o servidor
				// signIn(email, password);
			} else {
				setPasswordItsOk(false);
				alert('Sua senha precisa ter mais de 8 dígitos');
				return;
			}
		} else {
			setEmailItsOk(false);
			alert('Email Inválido');
			return;
		}
	}

	// Main LOGIN/REGISTER
	function handleSubmit(event) {
		event.preventDefault();

		if (isChecked) {
			handleRegister(event);
		} else {
			handleLogin(event);
		}
	}

	function handleNameValidation() {
		if (validName) {
			setNameItsOk(true);
		} else {
			setNameItsOk(false);
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
	function handleUserName() {
		let fullName = String(name).toLowerCase().split(' ');
		let nickName = `${fullName[0]}-${fullName[fullName.length - 1]}`;

		let normalizeUserName = nickName
			.normalize('NFKD')
			.replace(/[^a-zA-Z\-\s]/g, '');

		setUserName(normalizeUserName);
	}

	// Seta Email
	function handleChangeMail(value) {
		setEmail(value);
		handleUserName(value);
		handleEmailValidation();
	}

	// Seta Senha
	function handleChangePassword(value) {
		setPassword(value);
		handlePasswordValidation();
	}

	// Seta check do checkbox
	function handleChangeCheck(check) {
		setName('');
		setUserName('');
		setEmail('');
		setPassword('');

		setNameItsOk(true);
		setEmailItsOk(true);
		setPasswordItsOk(true);

		setHideInputRegister(check ? 'flex' : 'none');
		setIsChecked((prev) => (prev = check));
	}

	return (
		<WrapContainer>
			<main>
				<LoginArea>
					<div>
						<AccountCircleIcon color='primary' />
					</div>
					<span></span>
				</LoginArea>

				<LoginWrap>
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
												style={{ fill: `${nameItsOk ? '#7a75bc' : '#e0665d'}` }}
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
								disabled
								InputProps={{
									startAdornment: (
										<InputAdornment position='start'>
											<PersonRoundedIcon
												style={{
													fill: `${nameItsOk ? '#7a75bc' : '#e0665d'}`,
												}}
											/>
										</InputAdornment>
									),
								}}
								value={userName}
								style={{
									display: `${hideInputRegister}`,
								}}
								onChange={(e) => handleChangeName(e.target.value)}
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
													fill: `${emailItsOk ? '#7a75bc' : '#e0665d'}`,
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
													fill: `${passwordItsOk ? '#7a75bc' : '#e0665d'}`,
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

						<ButtonLogin
							type='submit'
							color='primary'
							disabled={!(emailItsOk && passwordItsOk)}
							style={{
								// transform: `translateY(${hideButtonLogin}rem)`,
								transform: `translateY(${
									!isChecked && emailItsOk && passwordItsOk ? '0' : '-3'
								}rem)`,
								marginBottom: `-7rem`,
							}}
						>
							{loadingAuth ? (
								<LoaderBalls size={20} fill='#eaeaec' />
							) : (
								'Acessar'
							)}
						</ButtonLogin>

						<ButtonLogin
							type='submit'
							color='primary'
							disabled={!(nameItsOk && emailItsOk && passwordItsOk)}
							style={{
								transform: `translateY(${
									isChecked && nameItsOk && emailItsOk && passwordItsOk
										? '2.7'
										: '-1'
								}rem)`,
								backgroundColor: '#344055',
							}}
						>
							{loadingAuth ? (
								<LoaderBalls size={20} fill='#eaeaec' />
							) : (
								'Registrar'
							)}
						</ButtonLogin>
					</form>
				</LoginWrap>
			</main>
		</WrapContainer>
	);
}
