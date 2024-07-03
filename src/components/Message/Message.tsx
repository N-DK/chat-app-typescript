import { useContext } from 'react';
import { MessageType } from '../../types';
import { DefaultContext } from '../layouts/DefaultLayout/DefaultLayout';

const Message: React.FC<{ message: MessageType }> = ({ message }) => {
    const { user } = useContext(DefaultContext);

    return (
        <div className="mb-3">
            {/* justify-end for sender */}
            <div
                className={`flex items-start ${
                    message.userId === user?._id ? 'justify-end' : ' '
                }`}
            >
                {message.userId !== user?._id && (
                    <div className="w-7 h-7 rounded-full overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZOIcF9043WMrXhXo05OIOuMM1br5MBu8_FQ&s"
                            alt=""
                            className="w-full h-full"
                        />
                    </div>
                )}
                <div className="rounded-md max-w-64 ml-3 bg-[#24262e] p-2 px-3">
                    {message.text}
                </div>
            </div>
        </div>
    );
};

export default Message;
