import request from '../api/request';

export const getUser = async () => {
    try {
        const res = await request.get('get-user', {
            headers: {
                'Authentication-token': `Bearer ${localStorage.getItem(
                    'token',
                )}`,
            },
        });
        return res?.data;
    } catch (error) {}
};

export const login = async ({
    username,
    password,
}: {
    username: string;
    password: string;
}) => {
    try {
        const res = await request.post('login', { username, password });
        return res.data;
    } catch (error) {}
};
