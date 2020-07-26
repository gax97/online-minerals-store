import React, { useEffect, useState } from 'react';
import { Launcher } from 'react-chat-window';
import { XButton } from '../../components/BuildingBlocks/Buttons';
import fetchService from '../../lib/fetch';
import { chatBotResponseHandler } from '../../lib/chatBotHelper';

const URL = process.env.CHAT_BOT_KEY;
const ChatContext = React.createContext({});

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let i = setTimeout(() => {
      setVisible(true);
    }, 6000);

    return () => {
      clearTimeout(i);
    };
  }, []);
  const handleMessage = message => {
    fetchService(URL + message.data.text).then(response => {
      chatBotResponseHandler(response, setMessages, message);
    });
  };
  return (
    <ChatContext.Provider value={{}}>
      {visible && (
        <div style={{ zIndex: 22, position: 'fixed' }}>
          <Launcher
            agentProfile={{
              teamName: 'Chatbot',
              imageUrl: 'https://img.icons8.com/ios/50/000000/bot.png',
            }}
            onMessageWasSent={handleMessage}
            messageList={messages}
            showEmoji
          />
          <XButton
            aria-label="Close Account Info Modal Box"
            onClick={() => setVisible(false)}
          >
            ×
          </XButton>
        </div>
      )}
      {children}
    </ChatContext.Provider>
  );
};
