import { Link } from 'react-router-dom';

type Props = {
    icon: React.ReactElement;
    name: string;
    path: string;
};

const MenuItem: React.FC<Props> = ({ icon, name, path }) => {
    return (
        <div>
            <div>
                <Link
                    className="flex items-center text-white py-3 px-1"
                    to={path}
                >
                    {icon}
                    <span className="ml-5">{name}</span>
                </Link>
            </div>
        </div>
    );
};

export default MenuItem;
