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

const processFeedbackOptions = [
  { label: "Difficult navigation", isActive: false },
  { label: "Process is not easy", isActive: false },
  { label: "Steps are not simple", isActive: false },
  { label: "Technical issue", isActive: false },
];

const Feedback = ({ onClose }) => {
  const [feedback, setFeedback] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [animateIndex, setAnimateIndex] = useState(null);
  const [step, setStep] = useState("idle");
  const [processFeedbackButtons, setProcessFeedbackButtons] = useState(
    processFeedbackOptions,
  );

  const handleCloseClick = () => {
    setAnimateIndex(null);
    setStep("idle");
    setIsSubmitted(false);
    setFeedback(null);
    onClose();
  };

  const handleEmojiClick = (i, feedbackValue) => {
    setProcessFeedbackButtons(processFeedbackOptions);
    setFeedback(feedbackValue);
    setAnimateIndex(i);

    setStep("rotated");

    setTimeout(() => {
      setStep("straight");
    }, 1000);

    setTimeout(() => {
      setStep("bordered");
    }, 1000);
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
            <EmojiButton onClick={() => handleEmojiClick(0, "bad")}>
              <div className="flex flex-col items-center gap-y-2">
                <WorstIcon
                  className={`rounded-full transition-all duration-300 ${animateIndex === 0 && step === "rotated" ? "rotate-180" : ""} ${animateIndex === 0 && step === "straight" ? "rotate-0" : ""} ${animateIndex === 0 && step === "bordered" ? `rotate-0 border-5 border-[#B40000]` : ""}`}
                />
                Worst
              </div>
            </EmojiButton>

            <EmojiButton onClick={() => handleEmojiClick(1, "bad")}>
              <div className="flex flex-col items-center gap-y-2">
                <div>
                  <PoorIcon
                    className={`rounded-full transition-all duration-300 ${animateIndex === 1 && step === "rotated" ? "rotate-180" : ""} ${animateIndex === 1 && step === "straight" ? "rotate-0" : ""} ${animateIndex === 1 && step === "bordered" ? `rotate-0 border-5 border-[#5164C8]` : ""}`}
                  />
                </div>
                Poor
              </div>
            </EmojiButton>

            <EmojiButton onClick={() => handleEmojiClick(2, "bad")}>
              <div className="flex flex-col items-center gap-y-2">
                <div>
                  <FairIcon
                    className={`rounded-full transition-all duration-300 ${animateIndex === 2 && step === "rotated" ? "rotate-180" : ""} ${animateIndex === 2 && step === "straight" ? "rotate-0" : ""} ${animateIndex === 2 && step === "bordered" ? `rotate-0 border-5 border-[#FABA0A]` : ""}`}
                  />
                </div>
                Fair
              </div>
            </EmojiButton>

            <EmojiButton
              borderColor="border-[#00B3CC]"
              onClick={() => handleEmojiClick(3, "good")}
            >
              <div className="flex flex-col items-center gap-y-2">
                <div>
                  <GoodIcon
                    className={`rounded-full transition-all duration-300 ${animateIndex === 3 && step === "rotated" ? "rotate-180" : ""} ${animateIndex === 3 && step === "straight" ? "rotate-0" : ""} ${animateIndex === 3 && step === "bordered" ? `rotate-0 border-5 border-[#00B3CC]` : ""}`}
                  />
                </div>
                Good
              </div>
            </EmojiButton>

            <EmojiButton
              borderColor="border-[#089E86]"
              onClick={() => handleEmojiClick(4, "good")}
            >
              <div className="flex flex-col items-center gap-y-2">
                <div>
                  <BestIcon
                    className={`rounded-full transition-all duration-300 ${animateIndex === 4 && step === "rotated" ? "rotate-180" : ""} ${animateIndex === 4 && step === "straight" ? "rotate-0" : ""} ${animateIndex === 4 && step === "bordered" ? `rotate-0 border-5 border-[#089E86]` : ""}`}
                  />
                </div>
                Best
              </div>
            </EmojiButton>
          </div>

          {feedback === "bad" && (
            <BadFeedbackForm
              processFeedbackButtons={processFeedbackButtons}
              setProcessFeedbackButtons={setProcessFeedbackButtons}
            />
          )}

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
