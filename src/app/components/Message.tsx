const Message = ({ text, sender }: { text: string; sender: string }) => {
    return (
        <div className={sender === 'user' ? 'user-message' : 'bot-message'}>
            {text}
        </div>
    );
};

export default Message;