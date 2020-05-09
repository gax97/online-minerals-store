import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { graphql } from 'gatsby';
import { FaqQuestion, options } from '../components/FAQ';
import { Flex } from '../components/Atoms/Flex';
import { Divider } from '../components/Atoms/Dividers';
import { StyledInput } from '../components/Atoms/Input';
import { SubmitButton } from '../components/Atoms/Buttons';

const FAQ = ({ data: { allContentfulFrequentlyAskedQuestion } }) => (
	<Layout>
		<SEO title="FAQ" />
		<h1>{allContentfulFrequentlyAskedQuestion.total}</h1>
		<FaqQuestion.SectionWrapper>
			{allContentfulFrequentlyAskedQuestion.nodes.map(item => {
				return (
					<FaqQuestion title={item.title}>
						{documentToReactComponents(item.content.json, options)}
					</FaqQuestion>
				);
			})}
		</FaqQuestion.SectionWrapper>
		<h2>Your question is not answered? Please contact us.</h2>
		<Flex.Column as="form">
			<Divider.SmallMarginDivider />
			<StyledInput placeholder="name" required />
			<Divider.SmallMarginDivider />
			<StyledInput
				type="textarea"
				placeholder="your message"
				as="textarea"
				required
			/>
			<Divider.SmallMarginDivider />
			<SubmitButton onClick={() => alert('Your message was successfully sent')}>
				Send
			</SubmitButton>
		</Flex.Column>
		<Divider.SmallMarginDivider />
	</Layout>
);

export default FAQ;

export const query = graphql`
	{
		allContentfulFrequentlyAskedQuestion(
			sort: { fields: createdAt, order: ASC }
		) {
			totalCount
			nodes {
				id
				title
				content {
					json
				}
				updatedAt
			}
		}
	}
`;
