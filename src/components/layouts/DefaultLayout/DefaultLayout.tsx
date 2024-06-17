const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <div className="bg-[#4d4e55] fixed top-0 bottom-0 left-0 right-0">
            <div className="w-full h-full flex items-center justify-center">
                <div className="rounded-xl bg-[#3c3e45] w-[75%] h-[85%]">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;
