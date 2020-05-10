import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
const Failure = () => {
	return (
		<Layout>
			<SEO title="Failed purchase" />
			<h1 style={{ fontSize: '30px' }}>Seems like that didn't work :(</h1>
		</Layout>
	);
};

export default Failure;
