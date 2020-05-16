import React, { useContext, useEffect } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { HomePageSection } from '../components/HomePageSection';
import { graphql } from 'gatsby';
import { CartContext } from '../../gatsby-browser';
import { ProductCard } from '../components/Product/ProductCard';
import { FlexWrap } from '../components/Atoms/Wrappers';
import { MainHeader } from '../components/Atoms/Headers';
import { Divider } from '../components/Atoms/Dividers';

const Products = ({ data, pageContext }) => {
	const { setItems } = useContext(CartContext);

	const handleAddToCart = sku => {
		setItems(prevState => [...prevState, sku]);
	};

	return (
		<Layout>
			<SEO title={'Products - ' + pageContext.name} />
			<MainHeader>Products - {pageContext.name}</MainHeader>
			<Divider.MediumMarginDivider />
			<FlexWrap>
				{data.allStripeSku.nodes.map(node => {
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
						/>
					);
				})}
			</FlexWrap>
		</Layout>
	);
};

export default Products;

export const query = graphql`
	query($name: String!) {
		allStripeSku(filter: { product: { name: { eq: $name } } }) {
			nodes {
				product {
					name
					shippable
					attributes
				}
				attributes {
					name
				}
				image
				id
				currency
				created
				active
				price
				updated
			}
		}
	}
`;
