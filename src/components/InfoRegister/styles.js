import styled from 'styled-components';

export const Wrapper = styled.span`
	display: flex;
	align-self: center;
	text-align: center;
	flex-direction: column;

	&:before {
		content: '';
		display: flex;
		align-self: center;

		margin-right: 10px;
		width: 0;
		transform: scale(${(props) => (props.hasError ? '1' : '0')});
		height: ${(props) => (props.hasError ? 'auto' : '0')};

		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		border-bottom: 5px solid #e4ad0aff;

		transition: all 400ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
	}

	& > small {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;

		box-shadow: var(--my-shadow);

		color: #ba8706ff;
		padding: 0.2rem 0.4rem;
		border-radius: 0.3rem;
		border: solid 1px #e4ad0aff;
		overflow: hidden;
		pointer-events: none;

		transform: translateX(${(props) => (props.hasError ? '0rem' : '-10rem')});
		height: ${(props) => (props.hasError ? 'auto' : '0rem')};
		opacity: ${(props) => (props.hasError ? '1' : '0')};
		background-color: rgb(240, 225, 181);

		transition: all 600ms cubic-bezier(0.18, 0.89, 0.32, 1.28);

		& > svg {
			font-size: 1.2rem;
			fill: #e0665d;
			margin-right: 0.2rem;
		}
	}
`;
