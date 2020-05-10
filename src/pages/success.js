import React, { useContext, useEffect } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { HomePageSection } from '../components/HomePageSection';
import { graphql } from 'gatsby';
import { CartContext } from '../../gatsby-browser';

const Success = ({ data }) => {
	const { setItems } = useContext(CartContext);
	useEffect(() => {
		if (setItems) {
			setItems([]);
		}
	}, []);
	return (
		<Layout>
			<SEO title="Successful purchase" />
			<h1 style={{ fontSize: '30px' }}>Success</h1>
		</Layout>
	);
};

export default Success;
