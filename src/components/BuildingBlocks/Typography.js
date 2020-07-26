import React from 'react';
import styled from 'styled-components';

export const Bold = styled.span`
  font-weight: bold;
`;
export const P = styled.p``;
export const StyledHyperLink = styled.span`
	color: ${props => props.theme.colors.primaryDark}
	padding: 1px 2px;
	text-decoration: underline;
	cursor: pointer;
`;
// render the styling
export const RTFBold = ({ children }) => <Bold>{children}</Bold>;
export const Text = ({ children }) => <P>{children}</P>;
export const HyperLink = ({ children }) => (
  <StyledHyperLink>{children}</StyledHyperLink>
);
// modifying the options

export const GrayUnderline = styled.div`
  align-self: flex-start;
  width: 95%;
  height: 1px;
  background: #dbdbdb;
  margin: 10px 0;
  border-radius: 1px;
`;
