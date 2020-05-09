import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
const buttonStyles = {
	fontSize: '13px',
	textAlign: 'center',
	color: '#fff',
	outline: 'none',
	padding: '12px 60px',
	boxShadow: '2px 5px 10px rgba(0,0,0,.1)',
	backgroundColor: 'rgb(255, 178, 56)',
	borderRadius: '6px',
	letterSpacing: '1.5px',
};
const stripePromise = loadStripe('pk_test_cZoFpexWyRNd6MyXYqPqrsCL00CVGgCDDr');
const redirectToCheckout = async event => {
	event.preventDefault();
	const stripe = await stripePromise;
	const { error } = await stripe.redirectToCheckout({
		items: [{ sku: 'sku_HEiUkY8hCXzrEL', quantity: 1 }],
		successUrl: `http://localhost:8000/page-2/`,
		cancelUrl: `http://localhost:8000/`,
	});
	if (error) {
		console.warn('Error:', error);
	}
};
const Checkout = () => {
	return (
		<button style={buttonStyles} onClick={redirectToCheckout}>
			BUY MY BOOK
		</button>
	);
};
export default Checkout;
