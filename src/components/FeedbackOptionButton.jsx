const FeedbackOptionButton = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`cursor-pointer rounded-full border border-[#D3DAE1] py-3 text-sm text-[#4A6784] ${isActive ? "border-[#002953] bg-[#002953] text-[#E5EAF7]" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default FeedbackOptionButton;
