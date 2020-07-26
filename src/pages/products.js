import React, { useContext } from 'react';

import Layout from '../components/layout';
import MetaInject from '../components/metaInject';
import { ProductCard } from '../components/Product/ProductCard';
import { graphql } from 'gatsby';
import { FlexWrap } from '../components/BuildingBlocks/Wrappers';
import { MainHeader } from '../components/BuildingBlocks/Headers';
import { Divider, Separator } from '../components/BuildingBlocks/Separators';
import { CartContext } from '../components/Cart';

const AdvancedExamplePage = ({ data }) => {
  const { allStripeSku } = data;
  const { setItems } = useContext(CartContext);
  const handleAddToCart = sku => {
    setItems(prevState => [...prevState, sku]);
  };
  return (
    <Layout>
      <MetaInject title="Products" />
      <MainHeader>All products</MainHeader>
      <Separator variant="medium" />
      <FlexWrap>
        {allStripeSku.edges.map(({ node }) => {
          return (
            <ProductCard
              currency={node.currency}
              name={node.attributes.name}
              images={null}
              price={node.price / 100}
              notFormatedPrice={node.price}
              continent="Europe"
              country="Serbia"
              weight={22}
              key={node.id}
              id={node.id}
              handleAddToCart={handleAddToCart}
              imgSrc={node.image}
            />
          );
        })}
      </FlexWrap>
    </Layout>
  );
};

export default AdvancedExamplePage;

export const query = graphql`
  query {
    allStripeSku {
      edges {
        node {
          id
          currency
          price
          attributes {
            name
          }
          image
        }
      }
    }
  }
`;
