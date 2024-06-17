import {
    AudioOutlined,
    CloseOutlined,
    PhoneOutlined,
    PictureOutlined,
    SendOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Space } from 'antd';
import { Message } from '../../Message';

const ChatRoom: React.FC = () => {
    return (
        <div className="bg-[#24262e] flex-1 h-full rounded-lg px-6 py-6 text-white">
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
                                Fabio Gramer
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
                            <Button type="primary" icon={<PhoneOutlined />} />
                            <Button icon={<CloseOutlined />} />
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
                    <div className="flex-1">
                        <Message />
                        <Message />
                    </div>
                    <div className="flex items-center h-[32px]">
                        <div className="flex-1 h-full rounded-md mr-3 bg-[#3c3e44]"></div>
                        <Space>
                            <Button icon={<PictureOutlined />} />
                            <Button icon={<AudioOutlined />} />
                            <Button type="primary" icon={<SendOutlined />} />
                        </Space>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatRoom;
