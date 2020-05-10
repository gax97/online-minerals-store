import React, { useContext } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { HomePageSection } from '../components/HomePageSection';
import { CartContext } from '../../gatsby-browser';

const CheckoutPage = props => {
	const { items } = useContext(CartContext);
	return (
		<Layout>
			<SEO title="Mineralium Store Checkout" />
			<h1>Welcome to your checkout page</h1>
			<h2>These are your products</h2>
			<React.Suspense fallback={<span>Loading</span>}>
				{items.map(item => {
					return <div>{item.id}</div>;
				})}
			</React.Suspense>
		</Layout>
	);
};

export default CheckoutPage;
