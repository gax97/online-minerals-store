import React from 'react';
import { UserProvider } from './src/Context/user/UserProvider';
import { ChatProvider } from './src/Context/chatbot/ChatProvider';
import { CartProviderManage } from './src/components/Cart';

export const wrapRootElement = ({ element }) => {
  return (
    <ChatProvider>
      <UserProvider>
        <CartProviderManage>{element}</CartProviderManage>
      </UserProvider>
    </ChatProvider>
  );
};
