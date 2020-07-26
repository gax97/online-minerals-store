import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function MetaInject({ title, meta }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            metaTitle
          }
        }
      }
    `,
  );

  const pageTitle = meta?.pageTitle ?? site.siteMetadata.title;
  const metaDescription =
    meta?.metaDescription ?? site.siteMetadata.description;

  return (
    <Helmet>
      <html lang="en" dir="ltr" />
      <meta charSet="utf-8" />
      <meta
        name="google-site-verification"
        content="9OjG91yc0sK0HYiMT877G7gE0fk19Q7qLNzSvoyhK0w"
      />
      <title>{`${pageTitle} - ${site.siteMetadata.metaTitle}`}</title>
      <meta name="description" content={metaDescription} />
      <meta name="application-name" content={site.siteMetadata.title} />
      <meta name="application-name" content={title} />
    </Helmet>
  );
}

MetaInject.defaultProps = {
  meta: [],
};

MetaInject.propTypes = {
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default MetaInject;
