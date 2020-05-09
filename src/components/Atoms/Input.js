import styled from "styled-components"

export const StyledInput = styled.input`
	width: 400px;
	border: 1px solid ${props => props.theme.colors.primaryDark};
	appearance: none;
	border-radius: 8px;
	padding: 0.25rem;
	resize: none;
`
