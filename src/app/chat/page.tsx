import '../../styles/css/reset.css';
import '../../styles/css/style.css';
import ChatWindow from './components/ChatWindow';

const ChatPage = () => {
    return (
        <div>
            <h1>チャットボット</h1>
            <ChatWindow />
        </div>
    );
};

export default ChatPage;