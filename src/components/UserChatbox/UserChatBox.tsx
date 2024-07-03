import { useContext, useEffect, useState } from 'react';
import styles from './UserChatBox.module.scss';
import classNames from 'classnames/bind';
import { DefaultContext } from '../layouts/DefaultLayout/DefaultLayout';
import { getMessageByConversationId } from '../../services';
import { io } from 'socket.io-client';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const UserChatBox: React.FC<{ data: any }> = ({ data }) => {
    const { user } = useContext(DefaultContext);
    const [other, setOther] = useState<any>();
    const [lassMessage, setLastMessage] = useState<any>();
    const [isActive, setIsActive] = useState<boolean>(false);
    const navigator = useNavigate();

    const convertTime = (time: number): string => {
        const date = new Date(time);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const am_pm = hours >= 12 ? 'PM' : 'AM';
        const hours12 = hours % 12 || 12;
        const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;
        return `${hours12}:${minutesFormatted} ${am_pm}`;
    };

    const handleChoseConversation = () => {
        navigator(`/${data._id}`);
    };

    useEffect(() => {
        setIsActive(window.location.pathname.replace('/', '') === data._id);
    }, [window.location.pathname]);

    // connect to socket
    useEffect(() => {
        const socket = io('http://localhost:8080');

        socket.on('connect', () => {
            console.log('Connected to server node server');
        });

        socket.on('received', (data) => {
            setLastMessage(data);
            window.scrollTo(0, document.body.scrollHeight);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    useEffect(() => {
        // data.member.filter((userId: any) => userId !== user?._id).length === 1 => this conversation has two members
        const other = data.members.filter(
            (member: any) => member._id !== user?._id,
        )[0];
        setOther(other);
        // const fetch = async () => {
        //     const res = await getUser
        // }
        // else data.member.filter((userId: any) => userId !== user?._id).length > 1 => this conversation has too many members
    }, []);

    useEffect(() => {
        if (data) {
            const fetch = async () => {
                const res = await getMessageByConversationId(data._id);
                setLastMessage(res?.data[res?.data.length - 1]);
            };

            fetch();
        }
    }, []);

    return (
        <>
            {data && lassMessage && (
                <div>
                    <div
                        onClick={handleChoseConversation}
                        className={`${cx(
                            'container',
                            `${isActive ? 'active' : ''}`,
                        )} flex items-center text-white gap-x-2 rounded-md py-4 cursor-pointer`}
                    >
                        <div className="relative">
                            <div className="rounded-full overflow-hidden w-11 h-11">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZOIcF9043WMrXhXo05OIOuMM1br5MBu8_FQ&s"
                                    alt=""
                                    className="w-full h-full"
                                />
                            </div>
                            <span className="absolute w-3 h-3 rounded-full bg-[#4f9c48] border border-[#fff] border-c top-0 z-10"></span>
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <div className="flex justify-between items-center text-sm mb-1">
                                <p className="text-base">{other?.username}</p>
                                <p className="text-xs">
                                    {convertTime(lassMessage.create_time)}
                                </p>
                            </div>
                            <p className="truncate text-sm">
                                {lassMessage.text}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default UserChatBox;
