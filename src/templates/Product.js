import React, { useContext, useEffect } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { CartContext } from '../../gatsby-browser';
import { Flex } from '../components/Atoms/Flex';
import styled from 'styled-components';
import { ProductCard } from '../components/Product/ProductCard';
import { SectionHeader } from '../components/Atoms/Headers';
import { Divider, Underline } from '../components/Atoms/Dividers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCheck,
	faClock,
	faCoffee,
	faDollarSign,
	faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { SubmitButton } from '../components/Atoms/Buttons';
import { Bold } from '../components/FAQ';

const Image = styled.img`
	height: 350px;
	width: 400px;
	margin: 1rem 0;
	cursor: pointer;
	&:hover {
		opacity: 0.9;
	}
	border-radius: 50px;
	background: white;
	box-shadow: 20px 20px 60px whitesmoke, -20px -20px 60px whitesmoke;
`;
const Product = ({ pageContext: { data } }) => {
	const { setItems } = useContext(CartContext);
	// useEffect(() => {
	// 	if (setItems) {
	// 		setItems([]);
	// 	}
	// }, []);
	console.log(data);
	let price = (data.price / 100).toFixed(2);

	let numberFormat = new Intl.NumberFormat(['en-US'], {
		style: 'currency',
		currency: data.currency,
		currencyDisplay: 'symbol',
	});
	return (
		<Layout>
			<SEO title={'Product - ' + data.attributes.name} />
			<h1 style={{ fontSize: '30px', textAlign: 'center' }}>
				Product - {data.attributes.name}
			</h1>
			<Divider.BigMarginDivider />
			<Flex.Row columnOnMobile justifyContent="space-around">
				<Flex.Column css="flex: 1;">
					<Image src={data.image} />
				</Flex.Column>
				<Flex.Column css="flex: 1;">
					<SectionHeader>Info</SectionHeader>
					<Divider.MediumMarginDivider />
					<Flex.Row justifyContent="space-between" alignItems="center">
						<span>Available</span>
						<FontAwesomeIcon icon={faCheck} color="green" />
					</Flex.Row>
					<Divider.SmallMarginDivider />
					<Flex.Row justifyContent="space-between" alignItems="center">
						<span>
							Published at <FontAwesomeIcon icon={faClock} color="black" />
						</span>
						<Bold>{new Date(data.created * 1000).toLocaleDateString()}</Bold>
					</Flex.Row>
					<Divider.SmallMarginDivider />
					<Flex.Row justifyContent="space-between" alignItems="center">
						<span>
							Price <FontAwesomeIcon icon={faDollarSign} color="black" />
						</span>
						<Bold>{numberFormat.format(price)}</Bold>
					</Flex.Row>
					<Divider.SmallMarginDivider />
					<Flex.Row justifyContent="space-between" alignItems="center">
						<span>Product group</span>
						<Bold>{data.product.name}</Bold>
					</Flex.Row>
					<Divider.SmallMarginDivider />
					<Flex.Row justifyContent="space-between" alignItems="center">
						<span>Seller</span>
						<Bold>Mineralium shop</Bold>
					</Flex.Row>
					<Divider.BigMarginDivider />
					<SubmitButton
						css="justify-content: space-between; max-width: 10rem; padding: 10px;"
						onClick={() => setItems(prevState => [...prevState, data])}
					>
						<p>Add to cart</p>
						<div />
						<FontAwesomeIcon icon={faShoppingCart} color="gold" />
					</SubmitButton>
					<Divider.BigMarginDivider />
				</Flex.Column>
			</Flex.Row>
		</Layout>
	);
};

export default Product;
