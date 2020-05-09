import styled from 'styled-components';

export const SubmitButton = styled.button`
	background-color: ${props => props.theme.colors.secondaryDark};
	color: white;
	padding: 0.25rem;
	border-radius: 4px;
	max-width: 6rem;
	height: 2.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	font-weight: bold;
	letter-spacing: 1.3px;
	cursor: pointer;
	&:hover {
		opacity: 0.9;
	}
`;
