import * as PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { GrayUnderline } from '../FAQ';
import { Divider } from '../Atoms/Dividers';
import { sum } from 'lodash';
const formatPrice = (amount, currency) => {
	let price = (amount / 100).toFixed(2);
	let numberFormat = new Intl.NumberFormat(['en-US'], {
		style: 'currency',
		currency: currency,
		currencyDisplay: 'symbol',
	});
	return numberFormat.format(price);
};
const StyledTable = styled.table`
	thead {
		border-bottom: 1px solid gray;
		font-weight: bold;
	}
	th {
		padding-bottom: 0.625rem;
	}
	td {
		padding-bottom: 0.4rem;
	}
`;
export function CartItems({ items }) {
	console.log(items);
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
			<Divider.SmallMarginDivider />
		</StyledTable>
	);
}

CartItems.propTypes = {
	items: PropTypes.any,
};
