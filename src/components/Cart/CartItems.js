import * as PropTypes from 'prop-types';
import React from 'react';
import { Separator } from '../BuildingBlocks/Separators';
import { sum } from 'lodash';
import { GrayUnderline } from '../BuildingBlocks/Typography';
import { formatPrice } from '../../lib/priceFormater';
import { StyledTable } from '../BuildingBlocks/Table';

export function CartItems({ items }) {
  if (!items?.length) {
    return <h2>You have no items in your cart!</h2>;
  }
  return (
    <StyledTable>
      <thead>
        <th>Product</th>
        <th>Price</th>
      </thead>
      <tbody>
        {items.map(item => {
          return (
            <tr>
              <td>{item.attributes.name}</td>
              <td>{formatPrice(item.price, item.currency)}</td>
            </tr>
          );
        })}
      </tbody>
      <GrayUnderline />
      <span>
        Total: {formatPrice(sum(items.map(item => item.price)), 'usd')}
      </span>
      <Separator variant="small" />
    </StyledTable>
  );
}

CartItems.propTypes = {
  items: PropTypes.any,
};
