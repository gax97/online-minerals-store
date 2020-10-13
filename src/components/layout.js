import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import Header from './header';
import './layout.css';
import { ThemeProvider } from 'styled-components';
import { MainContentWrapper } from './BuildingBlocks/Wrappers';
import Footer from './footer';
import { GlobalStyle } from '../lib/globalStyle';

const theme = {
  colors: {
    primaryDark: 'darkslategray',
    primaryVeryLight: 'rgb(232, 213, 250)',
    secondaryDark: 'rgb(70,152,152)',
    white: '#fff',
    black: '#1a1a1a',
    blackTransparent: 'rgba(41, 43, 46, 0.4)',
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
