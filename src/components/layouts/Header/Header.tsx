import { faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';
import { User } from '../../User';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC<{ username: string | undefined }> = ({ username }) => {
    return (
        <div className="bg-[#24262e] w-full h-[82px] rounded-lg">
            <div className="w-full flex items-center justify-between h-full px-6 text-white">
                <h1 className="font-semibold text-2xl">Chats</h1>
                <div className="flex items-center h-full">
                    <Button variant="contained">
                        <FontAwesomeIcon icon={faPlus} className="mr-3" />
                        New Chat
                    </Button>
                    <div className="mx-5">
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                    <User
                        avatarURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZOIcF9043WMrXhXo05OIOuMM1br5MBu8_FQ&s"
                        name={`` + username}
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
