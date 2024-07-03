import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from '../../Menu';
import { MenuItem } from '../../MenuItem';
import { User } from '../../User';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

const Sidebar: React.FC<{ username: string | undefined }> = ({ username }) => {
    return (
        <div className="bg-[#24262e] w-[300px] h-full rounded-lg px-5 pt-8 pb-7">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <div className="mb-7">
                        <User
                            avatarURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZOIcF9043WMrXhXo05OIOuMM1br5MBu8_FQ&s"
                            name={`Hi, ${username}`}
                        />
                    </div>
                    <Menu />
                </div>
                <MenuItem
                    name="Logout"
                    icon={<FontAwesomeIcon icon={faSignOut} />}
                    path=""
                />
            </div>
        </div>
    );
};

export default Sidebar;
