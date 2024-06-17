const Avatar: React.FC<{ url: string }> = ({ url }) => {
    return (
        <div className="w-10 h-10 rounded-full overflow-hidden">
            <img className="w-full h-full" src={url} alt="" />
        </div>
    );
};

export default Avatar;
