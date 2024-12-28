"use client"

import '../../../styles/css/chat-window.css';
import { useState } from 'react';
import InputField from './InputField';
import Message from './Message';
import { questions } from '../../../utils/questions';

// 最初にメッセージの型を定義
interface Message {
    text: string;
    sender: 'user' | 'bot';
}

const ChatWindow = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const addMessage = (option: string) => {
        setMessages([...messages, { text: option, sender: 'user' }]);
        
        // ボットの応答を追加
        const botResponse = questions[currentQuestionIndex].question;
        setMessages((prevMessages) => [...prevMessages, { text: botResponse, sender: 'bot' }]);
        
        // 次の質問に進む
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    };

    return (
        <div>
            <div className="messages">
                {messages.map((msg, index) => (
                    <Message key={index} text={msg.text} sender={msg.sender} />
                ))}
            </div>
            {currentQuestionIndex < questions.length && (
                <InputField onSend={addMessage} question={questions[currentQuestionIndex]} />
            )}
        </div>
    );
};

export default ChatWindow;