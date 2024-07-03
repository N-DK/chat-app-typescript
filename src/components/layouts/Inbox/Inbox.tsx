import { faBorderAll } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserChatBox } from '../../UserChatbox';
import { useEffect, useState } from 'react';
import { getConversations } from '../../../services';

const Inbox: React.FC = () => {
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const res = await getConversations();
            setConversations(res?.data);
        };

        fetch();
    }, []);

    return (
        <div className="bg-[#24262e] w-4/12 h-full rounded-lg px-6 py-7 text-white">
            <div>
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                        <h1>Inbox</h1>
                        <div className="rounded-md bg-[#d0344c] px-2 text-sm py-1 ml-3">
                            3 new
                        </div>
                    </div>
                    <button className="border-none rounded-lg bg-[#1565c0] w-8 h-8 flex justify-center items-center">
                        <FontAwesomeIcon
                            className="text-xl"
                            icon={faBorderAll}
                        />
                    </button>
                </div>
                <div className="overflow-y-clip max-h-[600px]">
                    {conversations?.map((conversation, index) => (
                        <UserChatBox key={index} data={conversation} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Inbox;
