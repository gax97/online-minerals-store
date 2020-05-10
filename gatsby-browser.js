/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SubmitButton } from './src/components/Atoms/Buttons';
import { Divider } from './src/components/Atoms/Dividers';
import createPersistedState from 'use-persisted-state';
import { Flex } from './src/components/Atoms/Flex';
import { navigate } from 'gatsby';

export const CartContext = React.createContext({});
export const ModalContainer = styled.div`
	position: fixed;
	right: 16px;
	top: 100px;
	padding: 20px 40px;
	background-color: white;
	box-shadow: 0px 2px 11px 2px rgba(0, 0, 0, 0.1);
	border-radius: 3px;
	z-index: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const PurchaseButton = styled.button`
	color: white;
	padding: 0.25rem;
	border-radius: 4px;
	max-width: 6rem;
	height: 2.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	letter-spacing: 1.2px;
	cursor: pointer;
	&:hover {
		opacity: 0.9;
	}
	background-color: rgb(255, 178, 56);
	margin-right: 10px;
`;
const CancelButton = styled(PurchaseButton)`
	color: rgb(255, 178, 56);
	background-color: whitesmoke;
	border: 1px solid rgb(255, 178, 56);
`;
const useCartItems = createPersistedState('cartItems');
const CartProviderManage = ({ children }) => {
	const [items, setItems] = useCartItems([]);
	const [cartVisible, setCartVisible] = useState(true);
	useEffect(() => {
		if (items.length) {
			setCartVisible(true);
		}
	}, [items]);
	useEffect(() => {
		if (window.location.pathname === '/checkout') {
			setCartVisible(false);
		} else {
		}
	}, [window.location]);
	return (
		<CartContext.Provider value={{ items, setItems }}>
			{children}
			{cartVisible && items.length > 0 && (
				<>
					<ModalContainer>
						<span>Items in cart: {items.length}</span>
						<Divider.SmallMarginDivider />
						<Flex.Row>
							<CancelButton onClick={() => setItems([])}>Clear</CancelButton>
							<PurchaseButton onClick={() => navigate('/checkout')}>
								Purchase
							</PurchaseButton>
						</Flex.Row>
					</ModalContainer>
				</>
			)}
		</CartContext.Provider>
	);
};

export const wrapRootElement = ({ element }) => {
	return <CartProviderManage>{element}</CartProviderManage>;
};
