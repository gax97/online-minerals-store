import React, { useContext } from 'react';

import Layout from '../components/layout';
import MetaInject from '../components/metaInject';
import { loadStripe } from '@stripe/stripe-js';
import { SubmitButton } from '../components/BuildingBlocks/Buttons';
import { CartItems } from '../components/Cart/CartItems';
import { Separator } from '../components/BuildingBlocks/Separators';
import { SectionHeader } from '../components/BuildingBlocks/Headers';
import { CartContext } from '../components/Cart';

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY);

const CheckoutPage = () => {
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
      <MetaInject title="Mineralium Store Checkout" />
      <SectionHeader left>Products in your cart:</SectionHeader>
      <Separator variant="big" />
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
