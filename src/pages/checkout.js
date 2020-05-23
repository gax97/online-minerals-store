import React, { useContext } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { CartContext } from '../../gatsby-browser';
import { loadStripe } from '@stripe/stripe-js';
import { SubmitButton } from '../components/Atoms/Buttons';
import { CartItems } from '../components/Cart/CartItems';
import { Divider } from '../components/Atoms/Dividers';
import { SectionHeader } from '../components/Atoms/Headers';
const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY);

const CheckoutPage = props => {
	const { items } = useContext(CartContext);
	const redirectToCheckout = async (event, sku, quantity = 1) => {
		event.preventDefault();
		const stripe = await stripePromise;
		const { error } = await stripe.redirectToCheckout({
			items: items.map(item => {
				return { sku: item.id, quantity };
			}),
			successUrl: `${window.location.origin}/success/`,
			cancelUrl: `${window.location.origin}/order-canceled`,
		});

		if (error) {
			console.warn('Error:', error);
		}
	};
	return (
		<Layout>
			<SEO title="Mineralium Store Checkout" />
			<SectionHeader left>Products in your cart:</SectionHeader>
			<Divider.BigMarginDivider />
			{typeof window === 'undefined' ? (
				<span>Loading</span>
			) : (
				<CartItems items={items} />
			)}
			{items?.length !== 0 && (
				<SubmitButton onClick={redirectToCheckout}>Buy all</SubmitButton>
			)}
		</Layout>
	);
};

export default CheckoutPage;
