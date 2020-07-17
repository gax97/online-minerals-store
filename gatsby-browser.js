import React, { useEffect, useState } from 'react';
import createPersistedState from 'use-persisted-state';
import { navigate } from 'gatsby';
import { UserProvider } from './src/Context/user/UserProvider';
import { ChatProvider } from './src/Context/chatbot/ChatProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faDollarSign,
	faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

import './src/styles/buttons.scss'
import './src/styles/containers.scss'
import './src/styles/atomic-flex.scss'
import './src/styles/atomic-text.scss'
import './src/styles/atomic-margins.scss'

export const CartContext = React.createContext({});

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
		}
	}, []);
	return (
		<CartContext.Provider value={{ items, setItems, setCartVisible }}>
			{children}
			{cartVisible && items.length > 0 && (
				<>
					<div className="modal-container">
						<div className="flex-row-spaced margin-l">
							<span>
								Items in cart: <span className="bold">{items.length}</span>
							</span>
							<FontAwesomeIcon icon={faShoppingCart} color="gold" />
						</div>
						<div className="flex">
							<button className="cancel-button" onClick={() => setItems([])}>Clear</button>
							<button
								onClick={() => navigate('/checkout')}
								className="purchase-button"
							>
								Purchase
								<FontAwesomeIcon icon={faDollarSign} color="white" />
							</button>
						</div>
					</div>
				</>
			)}
		</CartContext.Provider>
	);
};
export const wrapRootElement = ({ element }) => {
	return (
		<ChatProvider>
			<UserProvider>
				<CartProviderManage>{element}</CartProviderManage>
			</UserProvider>
		</ChatProvider>
	);
};
