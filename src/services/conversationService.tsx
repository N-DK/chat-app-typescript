import request from '../api/request';

export const getConversations = async () => {
    try {
        const res = await request.get('get-conversation', {
            headers: {
                'Authentication-token': `Bearer ${localStorage.getItem(
                    'token',
                )}`,
            },
        });
        return res.data;
    } catch (error) {}
};

export const getConversationById = async (id: string) => {
    try {
        const res = await request.get(`get-conversation?id=${id}`, {
            headers: {
                'Authentication-token': `Bearer ${localStorage.getItem(
                    'token',
                )}`,
            },
        });
        return res.data;
    } catch (error) {}
};
