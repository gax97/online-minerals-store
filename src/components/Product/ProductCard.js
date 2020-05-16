import styled from 'styled-components';
import React from 'react';
import { Device } from '../../lib/css';
import { SubmitButton } from '../Atoms/Buttons';
import { Divider } from '../Atoms/Dividers';

/**
 *
 * @param product { {name: string, images: [], price: number, continent: string, country: string, weight: number} }
 * @returns {*}
 * @constructor
 */
export const ProductCard = ({ imgSrc = "https:", ...props }) => {
	const product = props.product ?? props;
	return (
		<ProductCard.Wrapper>
			<h2>{product.name}</h2>
			<ProductCard.Image src={imgSrc} />
			<ProductCard.InfoWrapper>
				<h3>Price: {product.price}$</h3>
				<h3>
					From: {product.continent}, {product.country}
				</h3>
				<h3>Weight: {product.weight}oz</h3>
			</ProductCard.InfoWrapper>
			<Divider.SmallMarginDivider />
			<BuyButton
				onClick={() =>
					props.handleAddToCart({
						attributes: { name: product.name },
						price: product.notFormatedPrice,
						currency: product.currency,
						id: product.id,
					})
				}
			>
				Add to cart
			</BuyButton>
			<Divider.SmallMarginDivider />
		</ProductCard.Wrapper>
	);
};
ProductCard.InfoWrapper = styled.div`
	align-self: flex-start;
`;
const BuyButton = styled(SubmitButton)`
	max-width: 9rem;
`;
ProductCard.Image = styled.img`
	height: 180px;
	width: 250px;
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
	padding: 0 2rem;
	h2 {
		font-weight: 600;
		color: #223939;
	}
	${Device.mobileL} {
		width: 100%;
		margin-bottom: 3rem;
	}
`;
