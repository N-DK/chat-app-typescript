import styles from './UserChatBox.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const UserChatBox: React.FC = () => {
    return (
        <div>
            <div
                className={`${cx(
                    'container',
                )} flex items-center text-white gap-x-2 rounded-md py-4 cursor-pointer`}
            >
                <div className="relative">
                    <div className="rounded-full overflow-hidden w-11 h-11 ">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZOIcF9043WMrXhXo05OIOuMM1br5MBu8_FQ&s"
                            alt=""
                            className="w-full h-full"
                        />
                    </div>
                    <span className="absolute w-3 h-3 rounded-full bg-[#4f9c48] border border-[#fff] border-c top-0 z-10"></span>
                </div>
                <div className="flex-1 overflow-hidden">
                    <div className="flex justify-between items-center text-sm mb-1">
                        <p className="text-base">Fabio Gramer</p>
                        <p className="text-xs">14:22</p>
                    </div>
                    <p className="truncate text-sm">
                        UI designer is the best job for you okay
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserChatBox;
