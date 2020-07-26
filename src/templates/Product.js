import React, { useContext } from 'react';

import Layout from '../components/layout';
import MetaInject from '../components/metaInject';
import { Flex } from '../components/BuildingBlocks/Flex';
import styled from 'styled-components';
import { SectionHeader } from '../components/BuildingBlocks/Headers';
import { Separator } from '../components/BuildingBlocks/Separators';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faClock,
  faDollarSign,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { SubmitButton } from '../components/BuildingBlocks/Buttons';
import { Bold } from '../components/BuildingBlocks/Typography';
import { CartContext } from '../components/Cart';

const Image = styled.img`
  height: 350px;
  width: 400px;
  margin: 1rem 0;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  border-radius: 50px;
  background: #ffffff;
  box-shadow: -20px -20px 60px #d9d9d9, 20px 20px 60px #ffffff;
`;
const Product = ({ pageContext: { data } }) => {
  const { setItems } = useContext(CartContext);
  let price = (data.price / 100).toFixed(2);

  let numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: data.currency,
    currencyDisplay: 'symbol',
  });
  return (
    <Layout>
      <MetaInject title={'Product - ' + data.attributes.name} />
      <h1 style={{ fontSize: '30px', textAlign: 'center' }}>
        Product - {data.attributes.name}
      </h1>
      <Separator variant="big" />
      <Flex.Row columnOnMobile justifyContent="space-around">
        <Flex.Column css="flex: 1;">
          <Image src={data.image} />
        </Flex.Column>
        <Flex.Column css="flex: 1;">
          <SectionHeader>Info</SectionHeader>
          <Separator variant="medium" />
          <Flex.Row justifyContent="space-between" alignItems="center">
            <span>Available</span>
            <FontAwesomeIcon icon={faCheck} color="green" />
          </Flex.Row>
          <Separator variant="small" />
          <Flex.Row justifyContent="space-between" alignItems="center">
            <span>
              Published at <FontAwesomeIcon icon={faClock} color="black" />
            </span>
            <Bold>{new Date(data.created * 1000).toLocaleDateString()}</Bold>
          </Flex.Row>
          <Separator variant="small" />
          <Flex.Row justifyContent="space-between" alignItems="center">
            <span>
              Price <FontAwesomeIcon icon={faDollarSign} color="black" />
            </span>
            <Bold>{numberFormat.format(price)}</Bold>
          </Flex.Row>
          <Separator variant="small" />
          <Flex.Row justifyContent="space-between" alignItems="center">
            <span>Product group</span>
            <Bold>{data.product.name}</Bold>
          </Flex.Row>
          <Separator variant="small" />
          <Flex.Row justifyContent="space-between" alignItems="center">
            <span>Seller</span>
            <Bold>Mineralium shop</Bold>
          </Flex.Row>
          <Separator variant="big" />
          <SubmitButton
            css="justify-content: space-between; max-width: 10rem; padding: 10px;"
            onClick={() => setItems(prevState => [...prevState, data])}
          >
            <p>Add to cart</p>
            <div />
            <FontAwesomeIcon icon={faShoppingCart} color="gold" />
          </SubmitButton>
          <Separator variant="big" />
        </Flex.Column>
      </Flex.Row>
    </Layout>
  );
};

export default Product;
