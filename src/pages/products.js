import React, { useContext } from "react"

import Layout from '../components/layout';
import SEO from '../components/seo';
import { ProductCard } from '../components/Product/ProductCard';
import { graphql } from 'gatsby';
import { FlexWrap } from '../components/Atoms/Wrappers';
import { MainHeader } from "../components/Atoms/Headers"
import { Divider } from "../components/Atoms/Dividers"
import { CartContext } from "../../gatsby-browser"

const AdvancedExamplePage = ({ data }) => {
	const { allStripeSku } = data;
	const {setItems} = useContext(CartContext);
	const handleAddToCart = (sku) => {
		setItems(prevState => [...prevState, sku]);
	};
	return (
		<Layout>
			<SEO title="Products" />
			<MainHeader>All products</MainHeader>
			<Divider.MediumMarginDivider />
			<FlexWrap>
				{allStripeSku.edges.map(({ node }) => {
					return (
						<ProductCard
							currency={node.currency}
							name={node.attributes.name}
							images={null}
							price={node.price / 100}
							notFormatedPrice={node.price}
							continent="Europe"
							country="Serbia"
							weight={22}
							key={node.id}
							id={node.id}
							handleAddToCart={handleAddToCart}
							imgSrc={node.image}
						/>
					);
				})}
			</FlexWrap>
		</Layout>
	);
};

export default AdvancedExamplePage;

export const query = graphql`
	query {
		allStripeSku {
			edges {
				node {
					id
					currency
					price
					attributes {
						name
					}
					image
				}
			}
		}
	}
`;
