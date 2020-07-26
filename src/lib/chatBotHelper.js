export const chatBotResponseHandler = (response, setMessages, message) => {
  if (response.topScoringIntent.intent === 'Product lookup') {
    setMessages(prevState => [
      ...prevState,
      {
        author: 'them',
        type: 'text',
        data: { text: 'Sure I am here to help!' },
      },
    ]);
  } else if (response.topScoringIntent.intent === 'Payment intents') {
    setMessages(prevState => [
      ...prevState,
      {
        author: 'them',
        type: 'text',
        data: { text: 'You can pay using any credit card or bank card' },
      },
    ]);
  } else {
    setMessages(prevState => [
      ...prevState,
      {
        author: 'them',
        type: 'text',
        data: { text: 'I am not sure I have understood you :(' },
      },
    ]);
  }
  setMessages(prevState => [...prevState, message]);
};
