"use client"

import '../../styles/css/chat-window.css';
import { useState } from 'react';
import InputField from './InputField';
import { questions } from '../../utils/questions';

interface Message {
    text: string;
    sender: 'user' | 'bot';
}

const ChatWindow = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const addMessage = (option: string) => {
        setMessages([...messages, { text: option, sender: 'user' }]);
        const botResponse = questions[currentQuestionIndex].question;
        setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
        setSelectedOptions(prev => [...prev, option]);
        setCurrentQuestionIndex(prev => prev + 1);
    };

    const handleOptionChange = (option: string) => {
        setSelectedOption(option);
        addMessage(option);
    };

    return (
        <div className="chat-window">
            {currentQuestionIndex < questions.length && (
                <InputField 
                    question={questions[currentQuestionIndex]}
                    selectedOption={selectedOption}
                    handleOptionChange={handleOptionChange}
                    previousQuestions={questions.slice(0, currentQuestionIndex)}
                    selectedOptions={selectedOptions}
                />
            )}
        </div>
    );
};

export default ChatWindow;