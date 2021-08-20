import styled from 'styled-components';

export const WrapContainer = styled.div`
	min-height: 100vh;
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
	width: 25rem;
	height: 22rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;

	& > form {
		display: flex;
		flex-direction: column;
		align-items: center;
		/* justify-content: space-around; */
		/* margin-top: 1.5em; */

		& > div {
			display: inherit;
			flex-direction: inherit;
			align-items: inherit;

			width: 25rem;
			height: 17rem;
			padding: 2rem;
			border-radius: 0 0 1rem 1rem;
			box-shadow: 0px 22px 17px 0px rgba(37, 36, 55, 0.21);
			/* background-color: #dfc2f270; */
			background: rgb(107, 108, 163);
			background: linear-gradient(2deg, #bcb3cf 34%, #dfc2f259 100%);
			z-index: 1;

			div {
				svg {
					fill: var(--purple-logo);
				}

				input:active {
					border: red;
				}
			}
			/* input {
				margin-bottom: 15px;
				height: 35px;
				width: 100%;
				border: 0;
				border-radius: 4px;
				padding: 10px;
				font-size: 15px;
				color: #252437;
				background-color: #fff;
			} */
		}

		/* & > button {
			height: 4rem;
			width: 15rem;
			margin-top: -0.5rem;
			border: 0;
			border-radius: 0 0 1rem 1rem;
			background-color: #252437;
			background-color: var(--purple-logo);
			color: #fff;
			font-size: 1.2em;
		} */
	}

	/* & > form > h1 {
		text-align: center;
		margin-bottom: 0.5em;
		color: #252437;
	} */

	/* & > a {
		margin: 1.5em 0;
		color: #252437;
		cursor: pointer;
	} */
`;
