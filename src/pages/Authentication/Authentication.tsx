import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import { useState } from 'react';
import { login } from '../../services';
import { useNavigate } from 'react-router-dom';

const Authentication: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [messageApi, contextHolder] = message.useMessage();
    const navigator = useNavigate();

    const handleLogin = async () => {
        const payload = { username, password };
        const res = await login(payload);
        if (res.result === 1) {
            localStorage.setItem('token', res.data.token);
            navigator('/');
        } else {
            messageApi.open({
                type: 'warning',
                content: 'Đăng nhập thất bại',
            });
        }
    };

    return (
        <>
            {contextHolder}
            <div className="w-full h-full flex justify-center items-center">
                <div className="bg-[#24262e] w-[350px] rounded-3xl">
                    <div className="w-full flex justify-center py-7">
                        <div className="w-28 h-28 rounded-full overflow-hidden">
                            <img src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                        </div>
                    </div>
                    <div className="px-10">
                        <Form
                            onFinish={handleLogin}
                            name="normal_login"
                            className="login-form"
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Username!',
                                    },
                                ]}
                            >
                                <Input
                                    value={username}
                                    prefix={
                                        <UserOutlined className="site-form-item-icon" />
                                    }
                                    placeholder="Username"
                                    className="py-2"
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                ]}
                            >
                                <Input.Password
                                    value={password}
                                    prefix={
                                        <LockOutlined className="site-form-item-icon" />
                                    }
                                    type="password"
                                    placeholder="Password"
                                    className="py-2"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="w-full py-5 mt-2"
                                >
                                    Log in
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Authentication;
