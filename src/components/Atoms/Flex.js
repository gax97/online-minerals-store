import styled, { css } from 'styled-components';
export const Flex = () => {};
const flexCss = css`
	display: flex;
	${props =>
		props.justifyContent && `justify-content: ${props.justifyContent}`};
	${props => props.alignItems && `align-items: ${props.alignItems}`};
`;
Flex.Row = styled.div`
	${flexCss};
	flex-direction: row;
`;

Flex.Column = styled.div`
	${flexCss};
	flex-direction: column;
`;
