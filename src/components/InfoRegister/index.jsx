import { Wrapper } from './styles';

export default function InfoRegister(props) {
	return (
		<Wrapper hasError={props.hasError}>
			<span></span>
			<small>{props.message}</small>
		</Wrapper>
	);
}
