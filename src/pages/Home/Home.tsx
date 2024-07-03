import { useContext } from 'react';
import { ChatRoom } from '../../components/layouts/ChatRoom';
import { Header } from '../../components/layouts/Header';
import { Inbox } from '../../components/layouts/Inbox';
import { Sidebar } from '../../components/layouts/Sidebar';
import { DefaultContext } from '../../components/layouts/DefaultLayout/DefaultLayout';

const Home: React.FC = () => {
    const { user } = useContext(DefaultContext);

    return (
        <div className="p-6 h-full">
            <div className="flex h-full gap-x-6">
                <Sidebar username={user?.username} />
                <div className="flex flex-col w-full gap-y-6">
                    <Header username={user?.username} />
                    <div className="flex h-full gap-x-6">
                        <Inbox />
                        <ChatRoom user={user} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
