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
		transition: all 400ms cubic-bezier(0.18, 0.89, 0.32, 1.28);

		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		border-bottom: 5px solid #e0665d90;
	}

	& > small {
		color: rgb(189, 82, 75);
		padding: 0.2rem 0.4rem;
		border-radius: 0.3rem;
		overflow: hidden;
		pointer-events: none;

		transform: translateX(${(props) => (props.hasError ? '0rem' : '-10rem')});
		height: ${(props) => (props.hasError ? 'auto' : '0rem')};
		opacity: ${(props) => (props.hasError ? '1' : '0')};

		transition: all 600ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
		background-color: #e0665d30;
	}
`;
