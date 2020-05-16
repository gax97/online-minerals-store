const path = require('path');
const slugify = require('slugify');

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const result = await graphql(`
		query {
			allStripeProduct(filter: {}) {
				edges {
					node {
						id
						name
					}
				}
			}
			allStripeSku {
				edges {
					node {
						attributes {
							name
						}
						active
						currency
						created
						image
						id
					}
				}
			}
		}
	`);
	result.data.allStripeProduct.edges.forEach(({ node }) => {
		const slug = slugify(node.name, {
			lower: true,
		});
		createPage({
			path: /products/ + slug,
			component: path.resolve(`./src/templates/Products.js`),
			context: {
				name: node.name,
				slug: slug,
			},
		});
	});
	result.data.allStripeSku.edges.forEach(({ node }) => {
		const slug = slugify(node.attributes.name, {
			lower: true,
		});
		createPage({
			path: /product/ + slug,
			component: path.resolve(`./src/templates/Product.js`),
			context: {
				data: node,
				slug: slug,
			},
		});
	});
};
