import { ChatRoom } from '../../components/layouts/ChatRoom';
import { Header } from '../../components/layouts/Header';
import { Inbox } from '../../components/layouts/Inbox';
import { Sidebar } from '../../components/layouts/Sidebar';

const Home: React.FC = () => {
    return (
        <div className="p-6 h-full">
            <div className="flex h-full gap-x-6">
                <Sidebar />
                <div className="flex flex-col w-full gap-y-6">
                    <Header />
                    <div className="flex h-full gap-x-6">
                        <Inbox />
                        <ChatRoom />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
