import styled from 'styled-components';
import Theme from '../Theme';

const Primary = styled.button`
	display: inline-block;
	border: none;
	color: ${Theme.colors.white};
	padding: 0.7rem 1rem;
	cursor: ${(props) => (props.disabled ? 'inherit' : 'pointer')};
	transition: 0.25s all ease-in-out;
	border-radius: 0.25rem;
	box-shadow: ${(props) => (props.disabled ? 'none' : '0 8px 6px -6px rgba(0,0,0,0.25)')};
	text-transform: uppercase;
	font-size: 0.8rem;
	background-color: ${(props) => (props.disabled ? Theme.colors.grey : Theme.colors.primary)};
	&:hover {
		background-color: ${(props) => (props.disabled ? Theme.colors.grey : Theme.colors.primaryDark)};
		box-shadow: ${(props) => (props.disabled ? 'none' : '0 5px 6px -6px rgba(0,0,0,0.25)')};
	}
`;

export default Primary;
