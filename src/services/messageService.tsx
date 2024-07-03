import request from '../api/request';
import { MessageType } from '../types';

export const sendMessage = async (data: MessageType) => {
    try {
        const res = await request.post('/send-message', data, {
            headers: {
                'Authentication-token': `Bearer ${localStorage.getItem(
                    'token',
                )}`,
            },
        });
        return res;
    } catch (error) {}
};

export const getMessageByConversationId = async (id: string) => {
    try {
        const res = await request.get(`get-message?conversation_id=${id}`, {
            headers: {
                'Authentication-token': `Bearer ${localStorage.getItem(
                    'token',
                )}`,
            },
        });
        return res.data;
    } catch (error) {}
};
