import styled from 'styled-components';

export const WrapForm = styled.footer`
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
			padding: 1.3rem 2rem;
			border-radius: 0 0 1rem 1rem;
			box-shadow: 0px 22px 17px 0px rgba(37, 36, 55, 0.21);

			background: linear-gradient(2deg, #bcb3cf 34%, #dfc2f260 100%);
			z-index: 1;
		}
	}
`;
