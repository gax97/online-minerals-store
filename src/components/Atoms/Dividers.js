import styled from 'styled-components';

export const Divider = () => {};

Divider.VerticalDivider = styled.span`
	width: ${props => (props.width ? `${props.width}px` : '')};
`;

Divider.Line = styled.div`
	width: 100%;
	height: 40px;
`;

Divider.SmallMarginDivider = styled(Divider.Line)`
	height: 10px;
`;

Divider.MarginDivider = styled(Divider.Line)`
	height: 20px;
`;

Divider.BigMarginDivider = styled(Divider.Line)`
	height: 40px;
`;
