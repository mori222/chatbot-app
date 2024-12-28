import { useState } from 'react';

const InputField = ({ onSend, question }: { onSend: (option: string) => void, question: { question: string, options: string[] } }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (option: string) => {
        setSelectedOption(option);
        onSend(option);
    };

    return (
        <div>
            <p>{question.question}</p>
            {question.options.map((option) => (
                <div key={option}>
                    <input
                        type="radio"
                        id={option}
                        name="question"
                        value={option}
                        checked={selectedOption === option}
                        onChange={() => handleOptionChange(option)}
                    />
                    <label htmlFor={option}>{option}</label>
                </div>
            ))}
        </div>
    );
};

export default InputField;