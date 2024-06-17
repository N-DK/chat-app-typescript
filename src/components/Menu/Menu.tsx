import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAddressBook,
    faGear,
    faLock,
    faMessage,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from '../MenuItem';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
type TypeMenu = {
    icon: React.ReactElement;
    path: string;
    name: string;
};
const menu: TypeMenu[] = [
    { icon: <FontAwesomeIcon icon={faCompass} />, path: '', name: 'Explore' },
    { icon: <FontAwesomeIcon icon={faMessage} />, path: '', name: 'Chats' },
    { icon: <FontAwesomeIcon icon={faPhone} />, path: '', name: 'Calls' },
    {
        icon: <FontAwesomeIcon icon={faAddressBook} />,
        path: '',
        name: 'Contact',
    },
    { icon: <FontAwesomeIcon icon={faLock} />, path: '', name: 'Privacy' },
    { icon: <FontAwesomeIcon icon={faGear} />, path: '', name: 'Setting' },
];

const Menu: React.FC = () => {
    return (
        <div>
            <div>
                {menu.map((item, index) => (
                    <MenuItem
                        key={index}
                        path={item.path}
                        name={item.name}
                        icon={item.icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default Menu;
