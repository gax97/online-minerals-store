import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Checkout from '../components/checkout';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<h1>Hi people</h1>
		<p>This site is in construction</p>
		{/*<Checkout />*/}
		{/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>*/}
		{/*	<Image />*/}
		{/*</div>*/}
		{/*<Link to="/products/">Products</Link>*/}
	</Layout>
);

export default IndexPage;
