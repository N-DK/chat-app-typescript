import {
    AudioOutlined,
    CloseOutlined,
    PhoneOutlined,
    PictureOutlined,
    SendOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Empty, Space } from 'antd';
import { MessageType, UserType } from '../../../types';
import {
    getConversationById,
    getMessageByConversationId,
    sendMessage,
} from '../../../services';
import { useEffect, useRef, useState } from 'react';
import { Message } from '../../Message';
import { io } from 'socket.io-client';
import { useNavigate } from 'react-router-dom';

const ChatRoom: React.FC<{ user: UserType | undefined }> = ({ user }) => {
    const [textMessage, setTextMessage] = useState('');
    const [conversation, setConversation] = useState<any>();
    const [messages, setMessages] = useState<MessageType[]>([]);
    const [other, setOther] = useState<any>();
    const chatContainer = useRef<HTMLDivElement>(null);
    const navigator = useNavigate();

    // connect to socket
    useEffect(() => {
        const socket = io('http://localhost:8080');

        socket.on('connect', () => {
            console.log('Connected to server node server');
        });

        socket.on('received', (data) => {
            setMessages((prev) => [...prev, data]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    useEffect(() => {
        if (conversation) {
            const other = conversation.members.filter(
                (member: any) => member._id !== user?._id,
            )[0];
            setOther(other);
        }
    }, [conversation]);

    useEffect(() => {
        const conversationId = window.location.pathname.replace('/', '');

        const fetch = async () => {
            const res = await getConversationById(conversationId);
            setConversation(res.data[0]);
        };
        if (conversationId !== '') fetch();
        else setMessages([]);
    }, [window.location.pathname]);

    useEffect(() => {
        if (conversation) {
            const fetch = async () => {
                const res = await getMessageByConversationId(conversation._id);
                setMessages(res?.data);
            };

            fetch();
        }
    }, [conversation]);

    useEffect(() => {
        chatContainer.current?.scrollTo({
            top: chatContainer.current.scrollHeight,
            behavior: 'smooth',
        });
    }, [messages]);

    const handleSendMessage = async () => {
        if (user) {
            const message: MessageType = {
                receiver: conversation.members.filter(
                    (member: any) => member._id !== user?._id,
                ),
                text: textMessage,
                conversation_id: conversation?._id as string,
            };
            await sendMessage(message);
            setTextMessage('');
        }
    };

    return (
        <div className="bg-[#24262e] flex-1 h-full rounded-lg px-6 py-6 text-white">
            {messages.length > 0 ? (
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="w-14 h-14 rounded-full overflow-hidden">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZOIcF9043WMrXhXo05OIOuMM1br5MBu8_FQ&s"
                                    alt=""
                                    className="w-full h-full"
                                />
                            </div>
                            <div className="ml-3">
                                <p className="text-base font-semibold">
                                    {other?.username}
                                </p>
                                <p className="text-sm">Active</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <Space>
                                <Button
                                    type="primary"
                                    icon={<VideoCameraOutlined />}
                                />
                                <Button
                                    type="primary"
                                    icon={<PhoneOutlined />}
                                />
                                <Button
                                    onClick={() => navigator('/')}
                                    icon={<CloseOutlined />}
                                />
                            </Space>
                        </div>
                    </div>
                    <div
                        style={{
                            background:
                                "url('https://i.pinimg.com/1200x/af/f5/86/aff586e5a92ad7b4dab6c16d2ee60814.jpg')",
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}
                        className="rounded-md bg-slate-50 flex-1 mt-4 px-6 py-6 flex flex-col"
                    >
                        <div
                            ref={chatContainer}
                            className="overflow-auto h-[520px]"
                        >
                            {messages?.map((message, index) => (
                                <Message key={index} message={message} />
                            ))}
                        </div>
                        <div className="flex items-center flex-1">
                            <div className="flex-1 h-full items-center rounded-md mr-3 bg-[#3c3e44]">
                                <input
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            handleSendMessage();
                                        }
                                    }}
                                    value={textMessage}
                                    onChange={(e) =>
                                        setTextMessage(e.target.value)
                                    }
                                    className="bg-transparent outline-none border-0 w-full h-full px-2"
                                />
                            </div>
                            <Space>
                                <Button icon={<PictureOutlined />} />
                                <Button icon={<AudioOutlined />} />
                                <Button
                                    onClick={handleSendMessage}
                                    type="primary"
                                    icon={<SendOutlined />}
                                />
                            </Space>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center h-full">
                    <Empty description={`Chọn 1 cuộc hội thoại`} />
                </div>
            )}
        </div>
    );
};

export default ChatRoom;
