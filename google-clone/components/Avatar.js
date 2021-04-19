const Avatar = ({ url, className }) => {
  return (
    <img
      loading="lazy"
      src={url}
      alt="profile pic"
      className={`rounded-full cursor-pointer transition duration-150 transform hover:scale-110 h-10 ${className}`}
    />
  );
};

export default Avatar;
