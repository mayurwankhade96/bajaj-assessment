import { useState } from "react";
import FeedbackOptionButton from "./FeedbackOptionButton";

const processFeedbackOptions = [
  { label: "Difficult navigation", isActive: false },
  { label: "Process is not easy", isActive: false },
  { label: "Steps are not simple", isActive: false },
  { label: "Technical issue", isActive: false },
];

const BadFeedbackForm = () => {
  const [processFeedbackButtons, setProcessFeedbackButtons] = useState(
    processFeedbackOptions,
  );

  const handleOptionClick = (label) => {
    setProcessFeedbackButtons(
      processFeedbackButtons.map((o) => {
        if (o.label === label) {
          return {
            ...o,
            isActive: !o.isActive,
          };
        }
        return o;
      }),
    );
  };

  return (
    <div className="mb-5 w-full border-t border-dashed border-[#B3CBE3] pt-5">
      <h2 className="mb-3 text-center font-medium">
        Sorry to know that. Tell us what went wrong
      </h2>

      <div className="mb-4 grid grid-cols-2 gap-x-2 gap-y-3">
        {processFeedbackButtons.map((button) => {
          return (
            <FeedbackOptionButton
              key={button.label}
              isActive={button.isActive}
              label={button.label}
              onClick={() => handleOptionClick(button.label)}
            />
          );
        })}
      </div>

      <textarea
        className="w-full resize-none rounded-sm border border-[#E5EAF7] p-2 text-sm outline-0"
        placeholder="Tell us more..."
      ></textarea>
    </div>
  );
};

export default BadFeedbackForm;
