import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import {
	default as AccountCircle,
	default as AccountCircleIcon,
} from '@material-ui/icons/AccountCircle';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoaderBalls from '../../components/LoaderBalls';
import { ButtonLogin, InputLogin } from './customMUI';
import { LoginArea, LoginWrap, WrapContainer } from './styles';

export default function SignIn() {
	// const { signIn, loadingAuth } = useContext(AuthContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [isChecked, setIsChecked] = useState(false);
	const [loadingAuth, setLoadingAuth] = useState(false);

	const [isDisable, setIsDisable] = useState(true);
	const [hideButtonLogin, setHideButtonLogin] = useState(-3);
	const [hideInputRegister, setHideInputRegister] = useState('none');
	const [hideButtonRegister, setHideButtonRegister] = useState(-1);
	const history = useHistory();

	const validaEmail =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const validaSenhasFortes =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\])]).{8,}$/g;

	// Faz login
	function handleSubmit(event) {
		event.preventDefault();

		if (email !== '' && email.match(validaEmail)) {
			if (password !== '' && password.match(validaSenhasFortes)) {
				history.push('/dashboard');
				// Chamar a função que validará senha e email com o servidor
				// signIn(email, password);
			} else {
				alert('Sua senha precisa ter mais de 8 dígitos');
				return;
			}
		} else {
			alert('Email Inválido');
			return;
		}
	}

	// Toggle botão de login
	function handleHideButton() {
		if (isChecked) {
			if (name.length >= 3 && email.length >= 3 && password.length >= 5) {
				setIsDisable(false);
				setHideButtonRegister(2.7);
				setHideButtonLogin(-3);
			} else {
				setIsDisable(true);
				setHideButtonRegister(-1);
				setHideButtonLogin(-3);
			}
		} else {
			if (email.length >= 3 && password.length >= 5) {
				setIsDisable(false);
				setHideButtonRegister(-1);
				setHideButtonLogin(0);
			} else {
				setIsDisable(true);
				setHideButtonRegister(-1);
				setHideButtonLogin(-3);
			}
		}
	}

	// set Email
	function handleChangeName(value) {
		setName(value);
		handleHideButton();
	}
	// set Email
	function handleChangeMail(value) {
		setEmail(value);
		handleHideButton();
	}

	// Seta Senha
	function handleChangePass(value) {
		setPassword(value);
		handleHideButton();
	}

	// Seta check do checkbox
	function handleChangeCheck(check) {
		setName('');
		setEmail('');
		setPassword('');

		setHideInputRegister(check ? 'flex' : 'none');
		setIsChecked((prev) => (prev = check));
		handleHideButton();
	}

	return (
		<WrapContainer>
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
										<AccountCircle />
									</InputAdornment>
								),
							}}
							value={name}
							style={{ display: `${hideInputRegister}` }}
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
										<EmailRoundedIcon />
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
										<LockRoundedIcon />
									</InputAdornment>
								),
							}}
							onChange={(e) => handleChangePass(e.target.value)}
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
						disabled={isDisable}
						style={{
							transform: `translateY(${hideButtonLogin}rem)`,
							marginBottom: `-7rem`,
						}}
					>
						{loadingAuth ? <LoaderBalls size={20} fill='#eaeaec' /> : 'Acessar'}
					</ButtonLogin>

					<ButtonLogin
						type='submit'
						color='primary'
						disabled={isDisable}
						style={{
							transform: `translateY(${hideButtonRegister}rem)`,
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
		</WrapContainer>
	);
}
