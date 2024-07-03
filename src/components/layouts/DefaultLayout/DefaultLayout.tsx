import { createContext, useEffect, useState } from 'react';
import { getUser } from '../../../services';
import { UserType } from '../../../types';
import { useNavigate } from 'react-router-dom';

type ContextType = {
    user: UserType | undefined;
};

const defaultValue: ContextType = {
    user: undefined,
};

export const DefaultContext = createContext<ContextType>(defaultValue);

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [user, setUser] = useState<UserType>();
    const navigator = useNavigate();

    useEffect(() => {
        const fetch = async () => {
            const res = await getUser();
            if (res.result === 1) {
                navigator(
                    window.location.pathname.includes('login')
                        ? '/'
                        : window.location.pathname,
                );
                setUser(res.data);
            } else {
                navigator('/login');
            }
        };
        fetch();
    }, []);

    return (
        <DefaultContext.Provider value={{ user }}>
            <div className="bg-[#4d4e55] fixed top-0 bottom-0 left-0 right-0">
                <div className="w-full h-full flex items-center justify-center">
                    <div className="rounded-xl bg-[#3c3e45] w-[75%] h-[85%]">
                        {children}
                    </div>
                </div>
            </div>
        </DefaultContext.Provider>
    );
};

export default DefaultLayout;
