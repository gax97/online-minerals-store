import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomePageSection } from "../components/HomePageSection"

const IndexPage = ({ data }) => {
	const { allContentfulProduct } = data;
	return (
		<Layout>
			<SEO title="Mineralium Store" />
			<HomePageSection
				title={'Top pieces today'}
				products={allContentfulProduct.nodes}
			/>
		</Layout>
	);
};

export default IndexPage;

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
