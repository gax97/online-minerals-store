require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
	siteMetadata: {
		title: `Mineralium`,
		description: `Buy the best and the rarest minerals and the precious rocks out there. Straight from the seller. Safe payments with stripe.`,
		author: `Danilo Gacevic`,
		header: [
			{ name: 'Buy', to: '/products' },
			{ name: 'Sell', to: '/store' },
			{ name: 'Explore', to: '/all-products' },
		],
	},
	plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-source-stripe`,
			options: {
				objects: [
					'Balance',
					'BalanceTransaction',
					'Product',
					'ApplicationFee',
					'Sku',
					'Subscription',
				],
				secretKey: process.env.STRIPE_SECRET_KEY,
				downloadFiles: false,
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
