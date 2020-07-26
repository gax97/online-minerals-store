import React, { useContext, useEffect } from 'react';

import Layout from '../components/layout';
import MetaInject from '../components/metaInject';
import { MainHeader } from '../components/BuildingBlocks/Headers';
import { CartContext } from '../components/Cart';

const Success = () => {
  const { setItems } = useContext(CartContext);
  useEffect(() => {
    if (setItems) {
      setItems([]);
    }
  }, []);
  return (
    <Layout>
      <MetaInject title="Successful purchase" />
      <MainHeader left>Success</MainHeader>
    </Layout>
  );
};

export default Success;
