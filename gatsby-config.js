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
			{ name: 'Sell', to: '/sell' },
			{ name: 'Explore', to: '/explore' },
		],
		metaTitle: 'Online rocks and minerals store',
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
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.CONTENTFUL_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			},
		},
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				google: {
					families: ['Heebo'],
				},
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// The property ID; the tracking code won't be generated without it
				trackingId: 'UA-166884696-1',
				// Defines where to place the tracking script - `true` in the head and `false` in the body
				head: true,
				// // Setting this parameter is optional
				// anonymize: true,
				// // Setting this parameter is also optional
				// respectDNT: true,
				// // Avoids sending pageview hits from custom paths
				// exclude: ["/preview/**", "/do-not-track/me/too/"],
				// Delays sending pageview hits on route update (in milliseconds)
				// pageTransitionDelay: 0,
				// // Enables Google Optimize using your container Id
				// optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
				// // Enables Google Optimize Experiment ID
				// experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
				// // Set Variation ID. 0 for original 1,2,3....
				// variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
				// Defers execution of google analytics script after page load
				// defer: false,
			},
		},
		{
			resolve: "gatsby-plugin-google-tagmanager",
			options: {
				id: "GTM-5FPQX7S",

				// Include GTM in development.
				//
				// Defaults to false meaning GTM will only be loaded in production.
				includeInDevelopment: false,

				// datalayer to be set before GTM is loaded
				// should be an object or a function that is executed in the browser
				//
				// Defaults to null
				defaultDataLayer: { platform: "gatsby" },

				// Specify optional GTM environment details.
				// gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
				// gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
				// dataLayerName: "YOUR_DATA_LAYER_NAME",

				// Name of the event that is triggered
				// on every Gatsby route change.
				//
				// Defaults to gatsby-route-change
				// routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
