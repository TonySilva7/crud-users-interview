import ErrorOutlineRoundedIcon from '@material-ui/icons/ErrorOutlineRounded';
import { Wrapper } from './styles';

export default function InfoRegister(props) {
	return (
		<Wrapper hasError={props.hasError}>
			<span></span>
			<small>
				<ErrorOutlineRoundedIcon />
				<p>{props.message}</p>
			</small>
		</Wrapper>
	);
}
