import React, { useContext } from 'react';

import Layout from '../components/layout';
import MetaInject from '../components/metaInject';
import { graphql } from 'gatsby';
import { ProductCard } from '../components/Product/ProductCard';
import { FlexWrap } from '../components/BuildingBlocks/Wrappers';
import { MainHeader } from '../components/BuildingBlocks/Headers';
import { Separator } from '../components/BuildingBlocks/Separators';
import { CartContext } from '../components/Cart';

const Products = ({ data, pageContext }) => {
  const { setItems } = useContext(CartContext);

  const handleAddToCart = sku => {
    setItems(prevState => [...prevState, sku]);
  };

  return (
    <Layout>
      <MetaInject title={'Products - ' + pageContext.name} />
      <MainHeader>Products - {pageContext.name}</MainHeader>
      <Separator variant="medium" />
      <FlexWrap>
        {data.allStripeSku.nodes.map(node => {
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

export default Products;

export const query = graphql`
  query($name: String!) {
    allStripeSku(filter: { product: { name: { eq: $name } } }) {
      nodes {
        product {
          name
          shippable
          attributes
        }
        attributes {
          name
        }
        image
        id
        currency
        created
        active
        price
        updated
      }
    }
  }
`;
