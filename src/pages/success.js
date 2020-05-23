import React, { useContext, useEffect } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { CartContext } from '../../gatsby-browser';
import { MainHeader } from '../components/Atoms/Headers';

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
			<MainHeader left>Success</MainHeader>
		</Layout>
	);
};

export default Success;
