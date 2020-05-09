import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { graphql } from 'gatsby';
import { FaqQuestion, options } from '../components/FAQ';

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
