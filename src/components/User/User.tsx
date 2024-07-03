import { Avatar } from '../Avatar';

const User: React.FC<{ avatarURL: string; name: string }> = ({
    avatarURL,
    name,
}) => {
    return (
        <div className="flex items-center">
            <Avatar url={avatarURL} />
            <p className="ml-4 text-white font-semibold text-lg">{name}</p>
        </div>
    );
};

export default User;
