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
import { toast } from 'react-toastify';
import InfoRegister from '../../components/InfoRegister';
import LoaderBalls from '../../components/LoaderBalls';
import { actionAddUserRequest, actionLoginRequest } from '../../store/modules/userReducer/actions';
import { ButtonSign, InputLogin } from '../../styles/customMUI';
import { validEmail, validName, validPass, validUserName } from '../../utils';
import { LoginArea, LoginWrap, WrapContainer } from './styles';

export default function SignIn() {
	const dispatch = useDispatch();
	const isLoading = useSelector((state) => state.userReducer.isLoading);

	const [name, setName] = useState('');
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [isChecked, setIsChecked] = useState(false);

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
			toast.error('Dados Incorretos');
			return;
		}
	}

	// REGISTER
	function handleRegister() {
		if (nameItsOk && userNameItsOk && emailItsOk && passwordItsOk) {
			dispatch(actionAddUserRequest(name, userName, email, password));
			setName('');
			setUserName('');
			setEmail('');
			setPassword('');
			setIsChecked(false);
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

	function handleChangeName(name) {
		setName(name);
		handleNameValidation();
	}

	function handleUserName(userName) {
		setUserName(userName);
		handleUserNameValidation();
	}

	function handleChangeMail(email) {
		setEmail(email);
		handleEmailValidation();
	}

	function handleChangePassword(password) {
		setPassword(password);
		handlePasswordValidation();
	}

	function handleChangeCheck(check) {
		setName('');
		setUserName('');
		setEmail('');
		setPassword('');
		setIsChecked(!isChecked);
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
								style={{ display: `${isChecked ? 'flex' : 'none'}` }}
								onChange={(e) => handleChangeName(e.target.value)}
							/>

							<InfoRegister
								hasError={isChecked && name.length >= 1 && nameItsOk === false}
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

							<InfoRegister
								hasError={isChecked && userName.length >= 1 && userNameItsOk === false}
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
											<EmailRoundedIcon
												style={{
													fill: `${email === '' ? '#7a75bc' : emailItsOk ? '#7a75bc' : '#e0665d'}`,
												}}
											/>
										</InputAdornment>
									),
								}}
								style={{ display: `${isChecked ? 'flex' : 'none'}` }}
								value={email}
								onChange={(e) => handleChangeMail(e.target.value)}
							/>

							<InfoRegister
								hasError={isChecked && email.length >= 1 && emailItsOk === false}
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
								hasError={isChecked && password.length >= 1 && passwordItsOk === false}
								message='Insira pelo menos 8 dígitos, incluindo caracter especial e alguma letra
								maíuscula.'
							/>

							<FormControlLabel
								style={{ height: '2rem' }}
								control={
									<Checkbox
										id='checkRegister'
										checked={isChecked}
										color='primary'
										onChange={(e) => handleChangeCheck(e)}
									/>
								}
								label='Não tenho uma conta!'
							/>
						</div>

						<ButtonSign
							type='submit'
							color='primary'
							disabled={!(userNameItsOk && passwordItsOk && !isChecked)}
							style={{
								transform: `translateY(${
									!isChecked && userName === '' && password === ''
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
