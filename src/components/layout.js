/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

import Header from "./header"
import "./layout.css"
import { ThemeProvider } from "styled-components"
import { MainContentWrapper } from "./Atoms/Wrappers"
import Footer from "./footer"
import { GlobalStyle } from "../lib/css"

const theme = {
	colors: {
		primary: 'rgb(92, 52, 145)',
		primaryDark: 'darkslategray',
		primaryLight: 'rgb(148, 103, 206)',
		primaryVeryLight: 'rgb(232, 213, 250)',
		secondaryDark: 'rgb(70,152,152)',
		white: '#fff',
		black: '#1a1a1a',
		blackTransparent: 'rgba(41, 43, 46, 0.4)',
		red: 'rgb(218, 18, 31)',
	},
	pageWidth: {
		fixed: '800px',
	},
	screenSize: {
		mobileL: '600px',
	},
};

const Layout = ({ children }) => {
	const { site } = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
					header {
						name
						to
					}
				}
			}
		}
	`);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header
				siteTitle={site.siteMetadata.title}
				headerItems={site.siteMetadata.header}
			/>
			<MainContentWrapper>{children}</MainContentWrapper>
			<Footer />
		</ThemeProvider>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
