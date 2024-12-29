import '../styles/css/reset.css';
import '../styles/css/style.css';
import ChatWindow from './components/ChatWindow';
import Head from './components/Head';
import Result from './components/Result';

const ChatPage = () => {
    return (
        <main>
            <div className="wrap">  
                <Head />
                <ChatWindow />
            </div>
        </main>
    );
};

export default ChatPage;