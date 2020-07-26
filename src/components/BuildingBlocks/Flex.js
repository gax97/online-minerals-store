import styled, { css } from 'styled-components';
import { Device } from '../../lib/css';
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
  ${props =>
    props.columnOnMobile &&
    css`
      ${Device.mobileL} {
        flex-direction: column;
      }
    `}
`;

Flex.Column = styled.div`
  ${flexCss};
  flex-direction: column;
  ${Device.mobileL} {
    margin-right: unset;
  }
`;
