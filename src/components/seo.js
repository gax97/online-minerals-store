/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, title, meta }) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
		`,
	);

	const pageTitle = meta?.pageTitle || site.siteMetadata.title;
	const metaDescription =
		meta?.metaDescription || site.siteMetadata.description;

	const ogTitle = meta?.ogTitle || pageTitle;
	const ogDescription = meta?.ogDescription || metaDescription;

	const twitterTitle = meta?.twitterTitle || ogTitle;
	const twitterDescription = meta?.twitterDescription || ogDescription;

	// const ogImage = parseContentfulImageItem(meta?.ogImage, defaultImage);
	// const twitterImage = parseContentfulImageItem(meta?.twitterImage) || ogImage;

	return (
		<Helmet>
			<html lang="en" dir="ltr" />
			<meta charSet="utf-8" />
			<meta name="google-site-verification" content="9OjG91yc0sK0HYiMT877G7gE0fk19Q7qLNzSvoyhK0w" />
			{/*<link rel="shortcut icon" href={favicon} />*/}
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, shrink-to-fit=no"
			/>
			<meta name="theme-color" content="#000000" />
			{/*<link rel="apple-touch-icon" sizes="180x180" href={appleTouch} />*/}
			{/*<link rel="icon" type="image/png" sizes="32x32" href={favicon32} />*/}
			{/*<link rel="icon" type="image/png" sizes="16x16" href={favicon16} />*/}
			<meta name="msapplication-TileColor" content="#da532c" />
			<meta name="theme-color" content="#ffffff" />
			<title>{`${pageTitle} - ${site.siteMetadata.title}`}</title>
			<meta name="description" content={metaDescription} />
			<meta name="application-name" content={site.siteMetadata.title} />
			<meta name="application-name" content={title} />

			{/* Facebook Tags */}
			<meta property="og:site_name" content={title} />
			<meta property="og:type" content="website'" />
			<meta
				property="og:title"
				content={`${ogTitle} - ${site.siteMetadata.title}`}
			/>
			<meta property="og:description" content={ogDescription} />

			{/* Twitter tags */}
			<meta
				property="twitter:title"
				content={`${twitterTitle} - ${site.siteMetadata.title}`}
			/>
			<meta property="twitter:description" content={twitterDescription} />
		</Helmet>
	);
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
};

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
};

export default SEO;
