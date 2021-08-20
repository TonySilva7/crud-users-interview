import styled from 'styled-components';

export const WrapContainer = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	/* background-color: var(--charcoal-color); */
	background: rgb(234, 234, 236);
	background: radial-gradient(
		circle,
		rgba(234, 234, 236, 1) 0%,
		rgba(190, 216, 226, 1) 21%,
		rgba(107, 108, 163, 1) 69%,
		rgba(52, 64, 85, 1) 100%
	);
`;

export const LoginWrap = styled.div`
	background-color: #dfc2f290;
	width: 400px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border-radius: 17px;

	& > form {
		display: flex;
		flex-direction: column;
		margin-top: 1.5em;
		width: 90%;
	}

	& > form > h1 {
		text-align: center;
		margin-bottom: 0.5em;
		color: #252437;
	}

	& > form > input {
		margin-bottom: 15px;
		height: 35px;
		border: 0;
		border-radius: 4px;
		padding: 10px;
		font-size: 15px;
		color: #252437;
		background-color: #fff;
	}

	& > form > button {
		height: 35px;
		border: 0;
		border-radius: 4px;
		/* background-color: #252437; */
		background-color: var(--purple-logo);
		color: #fff;
		font-size: 1.2em;
	}

	& > a {
		margin: 1.5em 0;
		color: #252437;
		cursor: pointer;
	}
`;

export const LoginArea = styled.div`
	display: flex;
	justify-content: center;
	background-color: var(--charcoal-color);
	width: 100%;
	border-radius: 15px 15px 0 0;
	svg {
		padding: 20px;
		height: 110px;
	}
`;
