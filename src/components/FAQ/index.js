// Add in some styling
import styled from 'styled-components';
import React from 'react';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';

const Bold = styled.span`
	font-weight: bold;
`;
const P = styled.p``;
const StyledHyperLink = styled.span`
	color: ${props => props.theme.colors.primaryDark}
	padding: 1px 2px;
	text-decoration: underline;
	cursor: pointer;
`;
// render the styling
const RTFBold = ({ children }) => <Bold>{children}</Bold>;
const Text = ({ children }) => <P>{children}</P>;
const HyperLink = ({ children }) => (
	<StyledHyperLink>{children}</StyledHyperLink>
);
// modifying the options
export const options = {
	renderMark: {
		[MARKS.BOLD]: text => <RTFBold>{text}</RTFBold>,
	},

	renderNode: {
		[BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
		[INLINES.HYPERLINK]: (node, children) => <HyperLink>{children}</HyperLink>,
	},
};
export const GrayUnderline = styled.div`
	align-self: flex-start;
	width: 95%;
	height: 1px;
	background: #dbdbdb;
	margin: 10px 0;
	border-radius: 1px;
`;
export const FaqQuestion = ({ title, children }) => {
	return (
		<FaqQuestion.Wrapper>
			<FaqQuestion.Title>{title}</FaqQuestion.Title>
			<FaqQuestion.Content>{children}</FaqQuestion.Content>
			<GrayUnderline />
		</FaqQuestion.Wrapper>
	);
};
FaqQuestion.Title = styled.h2`
	margin-bottom: 1rem;
	font-size: 24px;
	font-weight: 600;
`;
FaqQuestion.Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;
`;
FaqQuestion.SectionWrapper = styled.div``;
FaqQuestion.Content = styled.div`
	font-size: 16px;
	margin-bottom: 0.825rem;
`;
