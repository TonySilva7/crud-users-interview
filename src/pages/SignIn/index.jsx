import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo-dev-life.svg';
import LoaderBalls from '../../components/LoaderBalls';
import { LoginArea, LoginWrap, WrapContainer } from './styles';

export default function SignIn() {
	// const { signIn, loadingAuth } = useContext(AuthContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loadingAuth, setLoadingAuth] = useState(false);

	function handleSubmit(event) {
		event.preventDefault();

		if (email !== '' && password !== '') {
			// signIn(email, password);
		}
	}

	return (
		<WrapContainer>
			<LoginWrap>
				<LoginArea>
					<Logo alt='Sistema Logo'></Logo>
				</LoginArea>

				<form onSubmit={handleSubmit}>
					<h1>Entrar</h1>
					<input
						type='text'
						placeholder='Email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type='password'
						placeholder='Senha'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button type='submit'>
						{loadingAuth ? <LoaderBalls size={20} fill='#7a75bc' /> : 'Acessar'}
					</button>
				</form>

				<Link to='/register'>Criar uma conta</Link>
			</LoginWrap>
		</WrapContainer>
	);
}
