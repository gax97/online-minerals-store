import { Divider } from './Atoms/Dividers';
import { ProductCard } from './Product/ProductCard';
import styled from 'styled-components';
import React, { useContext } from 'react';
import { Device } from '../lib/css';
import { MainHeader } from './Atoms/Headers';
import { CartContext } from '../../gatsby-browser';

export const HomePageSection = ({ title, products, noButton }) => {
	const { setItems } = useContext(CartContext);
	const handleAddToCart = sku => {
		setItems(prevState => [...prevState, sku]);
	};
	return (
		<HomePageSection.Wrapper>
			<MainHeader>{title}</MainHeader>
			<Divider.SmallMarginDivider />
			<HomePageSection.ItemsWrapper>
				{products.map(product => {
					return (
						<ProductCard
							{...product}
							handleAddToCart={handleAddToCart}
							notFormatedPrice={product.price * 100}
							imgSrc={'https:' + product.images[0].file.url}
							noButton={noButton}
						/>
					);
				})}
			</HomePageSection.ItemsWrapper>
		</HomePageSection.Wrapper>
	);
};
HomePageSection.ItemsWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	${Device.mobileL} {
		flex-direction: column;
	}
	margin: 3rem 0;
`;
HomePageSection.Wrapper = styled.section`
	width: 100%;
	background-color: ${props => props.theme.colors.white};
	display: flex;
	flex-direction: column;
	h1 {
		${Device.mobileL} {
			text-align: left;
		}
	}
	${Device.mobileL} {
		box-shadow: unset;
		width: 100vw;
	}
`;
