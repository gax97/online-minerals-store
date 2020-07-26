import React from 'react';

import Layout from '../components/layout';
import MetaInject from '../components/metaInject';
import { graphql } from 'gatsby';

const NotFoundPage = () => {
  return (
    <Layout>
      <MetaInject title="404: Not found" />
      <h1>Seems like this page doesn't exists</h1>
    </Layout>
  );
};

export default NotFoundPage;

export const query = graphql`
  {
    allContentfulProduct(limit: 3) {
      nodes {
        weight
        price
        name
        images {
          file {
            url
          }
          description
          id
          title
        }
        id
        description
        country
        continent
      }
    }
  }
`;
