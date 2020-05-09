import styled from 'styled-components';
import React from 'react';
import { Device } from '../../lib/css';

export const ProductCard = ({ product }) => {
	return (
		<ProductCard.Wrapper>
			<h2>{product.name}</h2>
			<ProductCard.Image src={'https:' + product.images[0].file.url} />
			<ProductCard.InfoWrapper>
				<h3>Price: {product.price}$</h3>
				<h3>
					From: {product.continent}, {product.country}
				</h3>
				<h3>Weight: {product.weight}oz</h3>
			</ProductCard.InfoWrapper>
		</ProductCard.Wrapper>
	);
};
ProductCard.InfoWrapper = styled.div`
	align-self: flex-start;
`;
ProductCard.Image = styled.img`
	height: 180px;
	width: 250px;
	margin: 1rem 0;
	cursor: pointer;
`;
ProductCard.Wrapper = styled.div`
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
