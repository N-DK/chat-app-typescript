enum React {
    LIKE = 'like',
    LOVE = 'love',
    LAUGH = 'laugh',
    WOW = 'wow',
    SAD = 'sad',
    ANGRY = 'angry',
}

enum Type {
    TEXT = 'text',
    AUDIO = 'audio',
    IMAGE = 'image',
}

export type MessageType = {
    _id?: string;
    userId?: string;
    receiver: string[];
    reacts?: {
        user_id: string;
        react: React;
    };
    type?: Type;
    text?: string;
    audio?: string;
    image?: string;
    replyFrom?: {
        mess_id: string;
    };
    conversation_id: string;
};
