import styled from 'styled-components';
import { WrapForm } from '../../styles/FormStyles';

export const WrapCreateUsers = styled.section`
	display: ${(props) => props.display};
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	position: absolute;

	background-color: rgba(0, 0, 0, 0.7);
	z-index: 100;

	top: 0;
	bottom: 0;
	left: 0;
	right: 0;

	header {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;

		height: 5rem;
		width: 25rem;
		border-radius: 1rem 1rem 0 0;
		border-bottom: solid 2px var(--white-color);
		background: linear-gradient(339deg, rgba(122, 117, 188, 1) 34%, rgba(82, 136, 214, 1) 100%);

		margin-top: 5rem;

		& > button {
			display: flex;
			position: absolute;
			right: 1rem;
			background-color: #eaeaec;
			border: none;
			border-radius: 100%;
			box-shadow: 1px 2px 9px -2px rgba(37, 36, 55, 0.7);

			svg {
				transition: all 300ms ease;
				fill: #e87e76;
			}

			&:hover {
				svg {
					transform: rotate(90deg);
				}
			}
		}
	}
`;

export const WrapUsersForm = styled(WrapForm)`
	& > form {
		& > div {
			background: linear-gradient(11deg, #bcb3cf 34%, #b9dbe6 104%);
		}
	}
`;
