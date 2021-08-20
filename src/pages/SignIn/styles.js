import styled from 'styled-components';

export const WrapContainer = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
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

export const LoginArea = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 25rem;
	position: relative;
	border-bottom: solid 1px #eee;

	span {
		display: flex;
		border-radius: 1rem 1rem 0 0;
		background-color: var(--charcoal-color);
		height: 6rem;
		width: inherit;
	}

	div {
		position: absolute;
		background-color: var(--white-color);
		border-radius: 50%;
		height: 7rem;
		width: 7rem;

		top: -3.5rem;

		svg {
			/* padding: 20px; */
			/* height: 110px; */
			/* margin-top: -80px; */
			font-size: 8rem;
			margin-left: -0.5rem;
			margin-top: -0.5rem;

			path {
				margin: 0;
				fill: var(--purple-logo);

				/* stroke: var(--pink-lavender); */
				stroke-width: 0.5px;
			}
		}
	}
`;

export const LoginWrap = styled.footer`
	background-color: #dfc2f270;
	width: 25rem;
	height: 22rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	border-radius: 0 0 1rem 1rem;
	box-shadow: 0px 22px 17px 0px rgba(37, 36, 55, 0.21);

	& > form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		margin-top: 1.5em;
		width: 70%;
		height: 70%;
	}

	& > form > h1 {
		text-align: center;
		margin-bottom: 0.5em;
		color: #252437;
	}

	& > form > input {
		margin-bottom: 15px;
		height: 35px;
		width: 100%;
		border: 0;
		border-radius: 4px;
		padding: 10px;
		font-size: 15px;
		color: #252437;
		background-color: #fff;
	}

	& > form > button {
		height: 35px;
		width: 70%;
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
