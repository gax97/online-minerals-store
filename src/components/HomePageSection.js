import { Divider } from './Atoms/Dividers';
import { ProductCard } from './Product/ProductCard';
import styled from 'styled-components';
import React from 'react';
import { Device } from '../lib/css';

export const HomePageSection = ({ title, products }) => {
	return (
		<HomePageSection.Wrapper>
			<h1>{title}</h1>
			<Divider.MarginDivider />
			<HomePageSection.ItemsWrapper>
				{products.map(product => {
					return <ProductCard product={product} />;
				})}
			</HomePageSection.ItemsWrapper>
		</HomePageSection.Wrapper>
	);
};
HomePageSection.ItemsWrapper = styled.div`
	display: flex;
	justify-content: center;
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
	box-shadow: 0px -2px 20px -1px rgba(204, 204, 204, 0.5);
	h1 {
		margin-top: 0.125rem;
		font-size: 22px;
		text-align: center;
		font-weight: 500;
		${Device.mobileL} {
			text-align: left;
		}
	}
	${Device.mobileL} {
		box-shadow: unset;
		width: 100vw;
	}
`;
