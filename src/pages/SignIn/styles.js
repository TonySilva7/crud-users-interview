import styled from 'styled-components';
import { WrapForm } from '../../styles/FormStyles';

export const WrapContainer = styled.div`
	height: 100vh;
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

		margin: 4rem auto;
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
		height: 5rem;
		width: inherit;
	}

	div {
		position: absolute;
		justify-content: center;
		align-items: center;
		background-color: var(--white-color);
		border-radius: 50%;
		height: 6.1rem;
		width: 6.1rem;
		transform: scale(0.9);

		top: -3.5rem;

		svg {
			font-size: 7rem;
			margin-left: -0.45rem;
			margin-top: -0.45rem;

			path {
				margin: 0;
				stroke-width: 0.5px;
			}
		}
	}
`;

export const LoginWrap = styled(WrapForm)`
	transition: all 400ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
`;
