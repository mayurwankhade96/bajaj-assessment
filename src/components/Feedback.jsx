import CloseIcon from "../assets/Close.svg?react";
import WorstIcon from "../assets/worst.svg?react";
import PoorIcon from "../assets/poor.svg?react";
import FairIcon from "../assets/fair.svg?react";
import GoodIcon from "../assets/good.svg?react";
import BestIcon from "../assets/best.svg?react";
import EmojiButton from "./EmojiButton";
import { useState } from "react";
import BadFeedbackForm from "./BadFeedbackForm";
import GoodFeedback from "./GoodFeedback";

const Feedback = ({ onClose }) => {
  const [feedback, setFeedback] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCloseClick = () => {
    setIsSubmitted(false);
    setFeedback(null);
    onClose();
  };

  return (
    <div className="w-full rounded-[10px] bg-white px-4 py-3 max-sm:rounded-br-none max-sm:rounded-bl-none sm:max-w-135">
      <div className="mb-1 text-right">
        <button className="cursor-pointer" onClick={handleCloseClick}>
          <CloseIcon />
        </button>
      </div>

      {!isSubmitted ? (
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-medium text-[#1F2937]">
            Update request submitted!
          </h2>
          <p className="mb-5 text-sm text-[#4B5563]">
            Please rate your profile update experience
          </p>

          <div className="mb-5 flex gap-x-7">
            <EmojiButton onClick={() => setFeedback("bad")}>
              <div className="flex flex-col items-center gap-y-2">
                <WorstIcon />
                Worst
              </div>
            </EmojiButton>

            <EmojiButton onClick={() => setFeedback("bad")}>
              <div className="flex flex-col items-center gap-y-2">
                <div>
                  <PoorIcon />
                </div>
                Poor
              </div>
            </EmojiButton>

            <EmojiButton onClick={() => setFeedback("bad")}>
              <div className="flex flex-col items-center gap-y-2">
                <div>
                  <FairIcon />
                </div>
                Fair
              </div>
            </EmojiButton>

            <EmojiButton onClick={() => setFeedback("good")}>
              <div className="flex flex-col items-center gap-y-2">
                <div>
                  <GoodIcon />
                </div>
                Good
              </div>
            </EmojiButton>

            <EmojiButton onClick={() => setFeedback("good")}>
              <div className="flex flex-col items-center gap-y-2">
                <div>
                  <BestIcon />
                </div>
                Best
              </div>
            </EmojiButton>
          </div>

          {feedback === "bad" && <BadFeedbackForm />}

          {feedback === "good" && <GoodFeedback />}

          {feedback !== "good" ? (
            <button
              className="w-50 cursor-pointer rounded-full bg-[linear-gradient(97.13deg,#FF6700_5.56%,#FE8E0C_94.44%)] py-2.5 text-sm font-medium text-white"
              onClick={() => setIsSubmitted(true)}
            >
              SUBMIT
            </button>
          ) : (
            <button
              className="w-50 cursor-pointer rounded-full bg-[linear-gradient(97.13deg,#FF6700_5.56%,#FE8E0C_94.44%)] py-2.5 text-sm font-medium text-white"
              onClick={handleCloseClick}
            >
              RATE US ON APP STORE
            </button>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-y-3">
          <div className="rounded-full border-5 border-[#FCD362]">
            <div className="rounded-full border-8 border-[#FEF0CA]">
              <FairIcon />
            </div>
          </div>

          <div className="mb-1 text-center">
            <h2 className="text-xl font-medium text-[#1F2937]">
              Thank you for your feedback
            </h2>
            <p className="text-sm">We’ll use this to serve you better.</p>
          </div>

          <button
            className="w-50 cursor-pointer rounded-full bg-[linear-gradient(97.13deg,#FF6700_5.56%,#FE8E0C_94.44%)] py-2.5 text-sm font-medium text-white"
            onClick={handleCloseClick}
          >
            GO TO HOME
          </button>
        </div>
      )}
    </div>
  );
};

export default Feedback;
