import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { HomePageSection } from '../components/HomePageSection';
import { graphql } from 'gatsby';

const NotFoundPage = ({ data }) => {
	const { allContentfulProduct } = data;
	return (
		<Layout>
			<SEO title="404: Not found" />
			<h1>Seems like this page doesn't exists</h1>
			{/*<h2>Since you are here check out these amazing pieces!</h2>*/}
			{/*<HomePageSection products={allContentfulProduct.nodes} />*/}
		</Layout>
	);
};

export default NotFoundPage;

export const query = graphql`
	{
		allContentfulProduct(limit: 3) {
			nodes {
				weight
				price
				name
				images {
					file {
						url
					}
					description
					id
					title
				}
				id
				description
				country
				continent
			}
		}
	}
`;
