import React, { useState } from "react"
import styled from "styled-components"
import { Launcher } from "react-chat-window"

const XButton = styled.button`
	position: fixed;
	font-size: 34px;
	right: 12px;
	bottom: 58px;
	color: indianred;
	cursor: pointer;
`
const URL =
	"https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/b59d666c-0da7-4dea-8a85-f146a7ebbc64?staging=true&timezoneOffset=-360&subscription-key=9f5a7fbc5eb946d689b752910b2112c2&q="
const ChatContext = React.createContext({})
export const ChatProvider = ({ children }) => {
	const [messages, setMessages] = useState([])
	const [visible, setVisible] = useState(true)
	const handleMessage = message => {
		fetch(URL + message.data.text)
		.then(json => json.json())
		.then(response => {
			if (response.topScoringIntent.intent === "Product lookup") {
				setMessages(prevState => [
					...prevState,
					{
						author: "them",
						type: "text",
						data: { text: "Sure I am here to help!" }
					}
				])
			} else if (response.topScoringIntent.intent === "Payment intents") {
				setMessages(prevState => [
					...prevState,
					{
						author: "them",
						type: "text",
						data: { text: "You can pay using any credit card or bank card" }
					}
				])
			} else {
				setMessages(prevState => [
					...prevState,
					{
						author: "them",
						type: "text",
						data: { text: "I am not sure I have understood you :(" }
					}
				])
			}
		})
		setMessages(prevState => [...prevState, message])
	}
	return (
		<ChatContext.Provider value="">
			{visible && (
				<div style={{ zIndex: 22, position: "fixed" }}>
					<Launcher
						agentProfile={{
							teamName: "Chatbot",
							imageUrl: "https://img.icons8.com/ios/50/000000/bot.png"
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
	)
}
