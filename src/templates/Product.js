import React, { useContext, useEffect } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { CartContext } from '../../gatsby-browser';

const Product = ({ pageContext: { data } }) => {
	const { setItems } = useContext(CartContext);
	useEffect(() => {
		if (setItems) {
			setItems([]);
		}
	}, []);
	return (
		<Layout>
			<SEO title={'Product - ' + data.attributes.name} />
			<h1 style={{ fontSize: '30px' }}>Product - {data.attributes.name}</h1>
			{JSON.stringify(data)}
		</Layout>
	);
};

export default Product;
