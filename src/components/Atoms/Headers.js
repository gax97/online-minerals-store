import styled from 'styled-components';
// @NOTE only use one MainHeader per page
export const MainHeader = styled.h1`
	font-size: 32px;
	font-weight: bold;
	text-align: center;
	${props => props.left && `text-align: left`};
`;
export const SectionHeader = styled.h2`
	font-size: 22px;
	font-weight: 600;
	text-align: center;
	${props => props.left && `text-align: left`};
`;
