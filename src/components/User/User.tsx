import { Avatar } from '../Avatar';

const User: React.FC<{ url: string; name: string }> = ({ url, name }) => {
    return (
        <div className="flex items-center">
            <Avatar url={url} />
            <p className="ml-4 text-white font-semibold text-lg">{name}</p>
        </div>
    );
};

export default User;
