import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import {
	default as AccountCircle,
	default as AccountCircleIcon,
} from '@material-ui/icons/AccountCircle';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoaderBalls from '../../components/LoaderBalls';
import { ButtonLogin, InputLogin } from './customMUI';
import { LoginArea, LoginWrap, WrapContainer } from './styles';

export default function SignIn() {
	// const { signIn, loadingAuth } = useContext(AuthContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isChecked, setIsChecked] = useState(false);
	const [loadingAuth, setLoadingAuth] = useState(false);
	const [hideButtonLogin, setHideButtonLogin] = useState(100);

	// Faz login
	function handleSubmit(event) {
		event.preventDefault();

		if (email !== '' && password !== '') {
			// signIn(email, password);
		}
	}

	// Toggle botão de login
	function handleHideButton(e) {
		console.log(password.length);
		if (e.length >= 3 && password.length >= 5) {
			setHideButtonLogin(0);
		}
	}

	// set Email
	function handleChangeMail(value) {
		// validar aqui
		setEmail(value);
	}

	// Seta Senha
	function handleChangePass(value) {
		// validar aqui
		setPassword(value);
	}

	// Seta check do checkbox
	function handleChangeCheck(e) {
		setIsChecked(e.target.checked);
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
							id='email'
							fullWidth
							label='Email *'
							variant='outlined'
							type='email'
							style={{ marginBottom: 22 }}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<AccountCircle />
									</InputAdornment>
								),
							}}
							value={email}
							onChange={(e) => handleChangeMail(e.target.value)}
							onKeyUp={(e) => handleHideButton(e.target.value)}
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
									// checked={state.checkedA}
									onChange={handleChangeCheck}
									name='checkedA'
								/>
							}
							label='Não tenho uma conta!'
						/>
					</div>

					<ButtonLogin
						type='submit'
						color='primary'
						disabled={false}
						style={{ transform: `translateY(-${hideButtonLogin}px)` }}
					>
						{loadingAuth ? <LoaderBalls size={20} fill='#eaeaec' /> : 'Acessar'}
					</ButtonLogin>
				</form>

				<Link to='/register'>Criar uma conta</Link>
			</LoginWrap>
		</WrapContainer>
	);
}
