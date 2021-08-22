import styled from 'styled-components';

export const WrapContainer = styled.div`
	min-height: 100vh;
	display: flex;

	background: rgb(234, 234, 236);
	background: radial-gradient(
		circle,
		rgba(234, 234, 236, 1) 0%,
		rgba(190, 216, 226, 1) 21%,
		rgba(107, 108, 163, 1) 69%,
		rgba(52, 64, 85, 1) 100%
	);

	main {
		flex-direction: column;
		align-items: center;
		justify-content: center;

		margin: 6rem auto;
	}
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
			font-size: 8rem;
			margin-left: -0.5rem;
			margin-top: -0.5rem;

			path {
				margin: 0;
				fill: var(--purple-logo);
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
		color: var(--charcoal-color);

		& > div {
			display: inherit;
			flex-direction: inherit;
			align-items: inherit;

			width: 25rem;
			padding: 2rem;
			border-radius: 0 0 1rem 1rem;
			box-shadow: 0px 22px 17px 0px rgba(37, 36, 55, 0.21);

			background: linear-gradient(2deg, #bcb3cf 34%, #dfc2f260 100%);
			z-index: 1;
		}
	}
`;
