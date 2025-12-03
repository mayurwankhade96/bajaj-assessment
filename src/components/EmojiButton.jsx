const EmojiButton = ({ onClick, children }) => {
  return (
    <button className="cursor-pointer" onClick={onClick}>
      {children}
    </button>
  );
};

export default EmojiButton;
