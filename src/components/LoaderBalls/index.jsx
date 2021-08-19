import { ReactComponent as LB } from './loader-balls.svg';
import { Content, Wrapper } from './styles';

export default function LoaderBalls(props) {
	return (
		<Wrapper>
			<Content size={props.size} fill={props.fill}>
				<LB />
			</Content>
		</Wrapper>
	);
}
