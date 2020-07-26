import styled from 'styled-components';
import React from 'react';
import { Device } from '../../lib/css';
import { SubmitButton } from '../BuildingBlocks/Buttons';
import { Divider, Separator } from '../BuildingBlocks/Separators';
import slugify from 'slugify';
import { navigate } from '@reach/router';
import { Bold } from '../BuildingBlocks/Typography';
/**
 *
 * @param product { {name: string, images: [], price: number, continent: string, country: string, weight: number} }
 * @returns {*}
 * @constructor
 */
export const ProductCard = ({ imgSrc = 'https:', noButton, ...props }) => {
  const product = props.product ?? props;
  const slug = slugify(product.name, {
    lower: true,
  });
  return (
    <ProductCard.Wrapper onClick={() => navigate('/product/' + slug)}>
      <h2>{product.name}</h2>
      <ProductCard.Image src={imgSrc} alt={product.name} />
      <ProductCard.InfoWrapper>
        <h3>
          Price: <Bold>{product.price}$</Bold>
        </h3>
        <h3>
          From: <Bold>{product.continent}</Bold>, <Bold>{product.country}</Bold>
        </h3>
        <h3>
          Weight: <Bold>{product.weight}oz</Bold>
        </h3>
      </ProductCard.InfoWrapper>
      <Separator variant="small" />
      {!noButton && (
        <BuyButton
          onClick={e => {
            e.stopPropagation();
            props.handleAddToCart({
              attributes: { name: product.name },
              price: product.notFormatedPrice,
              currency: product.currency,
              id: product.id,
            });
          }}
        >
          Add to cart
        </BuyButton>
      )}
      <Separator variant="small" />
    </ProductCard.Wrapper>
  );
};
ProductCard.InfoWrapper = styled.div`
  align-self: flex-start;
`;
const BuyButton = styled(SubmitButton)`
  max-width: 9rem;
  &:hover {
    color: #f6b203;
  }
`;
ProductCard.Image = styled.img`
  height: 180px;
  width: 250px;
  min-height: 180px;
  min-width: 250px;
  max-height: 180px;
  max-width: 250px;
  margin: 1rem 0;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

ProductCard.Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  cursor: pointer;
  h2 {
    font-weight: 600;
    color: #223939;
  }
  ${Device.mobileL} {
    width: 100%;
    margin-bottom: 3rem;
  }
  box-shadow: -5px -2px 11px 2px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
`;
