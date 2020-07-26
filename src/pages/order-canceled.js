import React from 'react';

import Layout from '../components/layout';
import MetaInject from '../components/metaInject';
const Failure = () => {
  return (
    <Layout>
      <MetaInject title="Failed purchase" />
      <h1 style={{ fontSize: '30px' }}>Seems like that didn't work :(</h1>
    </Layout>
  );
};

export default Failure;
