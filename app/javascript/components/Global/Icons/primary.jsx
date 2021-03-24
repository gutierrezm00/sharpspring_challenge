import styled from 'styled-components';
import Theme from '../Theme'

const Primary = styled.div`
	width: 2rem;
	padding: 0.25rem;
	margin-right: 0.25rem;
	text-align: center;
	background-color: ${(props) => {
		if (props.viewing) return Theme.colors.active;
		if (props.selected) return Theme.colors.active;
		return Theme.colors.white;
	}};
	color: ${(props) => (props.disabled ? Theme.colors.grey : Theme.colors.black)};
	border: 1px solid ${Theme.colors.grey};
	border-radius: 1rem;
	cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
	&:hover {
		background-color: ${(props) => (props.disabled ? Theme.colors.white : Theme.colors.primaryLight)};
	}
`;

export default Primary;
