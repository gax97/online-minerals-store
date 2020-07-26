import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
const Variants = {
  small: css`
    height: 10px;
  `,
  medium: css`
    height: 30px;
  `,
  big: css`
    height: 40px;
  `,
};
export const Separator = styled.div`
  width: 100%;
  height: 20px;
  ${props => {
    return Variants[props.variant];
  }};
`;
Separator.propTypes = {
  variant: PropTypes.oneOf(['small', 'medium', 'big']),
};
