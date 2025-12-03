import { useState } from "react";
import Label from "./Label";
import Modal from "./Modal";
import Feedback from "./Feedback";

const Form = () => {
  const [isOpen, setIsOpen] = useState(false);

  const formData = JSON.parse(localStorage.getItem("formData"));

  const handleResetClick = () => {
    localStorage.removeItem("formData");
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const dateOfBirth = formData.get("dateOfBirth");
    const email = formData.get("email");
    const mobile = formData.get("mobile");
    const alternateMobile = formData.get("alternateMobile");

    localStorage.setItem(
      "formData",
      JSON.stringify({ name, dateOfBirth, email, mobile, alternateMobile }),
    );
    setIsOpen(true);
  };

  return (
    <>
      <div className="py-4 max-md:px-4 md:pl-35">
        <div className="sm:max-w-132">
          <div className="mb-5 text-[#1a1a1a]">
            <h1 className="text-lg font-medium">Personal information</h1>
            <p className="text-justify max-sm:text-xs sm:text-sm">
              Manage your personal details and stay updated about your recent
              transactions, offers, and other services
            </p>
          </div>

          <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
            <div className="rounded-sm border border-[#e5e5e5] px-3 py-2">
              <Label
                className="flex items-center justify-between"
                htmlFor="name"
              >
                Full Name
                <span className="cursor-pointer text-xs font-medium text-[#FF6700]">
                  Edit
                </span>
              </Label>
              <input
                className="w-full text-sm text-[#1a1a1a] outline-0"
                name="name"
                id="name"
                defaultValue={formData?.name}
                required
              />
            </div>

            <div className="flex flex-col gap-y-2 rounded-sm border border-[#e5e5e5] px-3 py-2">
              <span className="text-lg font-medium">
                Permanent Account Number (PAN)
              </span>
              <span className="text-sm text-[#1a1a1a]">Request in process</span>
              <p className="rounded-xs bg-[#CEEAE5] p-2 text-xs text-[#00846F]">
                Thank you for submitting the request. Your PAN will be updated
                in 2 business days. Please check the latest status in request
                history.
              </p>
            </div>

            <div className="rounded-sm border border-[#e5e5e5] px-3 py-2">
              <Label
                className="flex items-center justify-between"
                htmlFor="dateOfBirth"
              >
                Date of Birth
                <span className="cursor-pointer text-xs font-medium text-[#FF6700]">
                  Edit
                </span>
              </Label>
              <input
                className="w-full text-sm text-[#1a1a1a] outline-0"
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                defaultValue={formData?.dateOfBirth}
                required
              />
            </div>

            <div className="rounded-sm border border-[#e5e5e5] px-3 py-2">
              <Label
                className="flex items-center justify-between"
                htmlFor="email"
              >
                Email ID
                <span className="cursor-pointer text-xs font-medium text-[#FF6700]">
                  Edit
                </span>
              </Label>
              <input
                className="w-full text-sm text-[#1a1a1a] outline-0"
                type="email"
                name="email"
                id="email"
                defaultValue={formData?.email}
                required
              />
            </div>

            <div className="rounded-sm border border-[#e5e5e5] px-3 py-2">
              <Label
                className="flex items-center justify-between"
                htmlFor="mobile"
              >
                Mobile Number
                <span className="cursor-pointer text-xs font-medium text-[#FF6700]">
                  Edit
                </span>
              </Label>
              <input
                className="w-full text-sm text-[#1a1a1a] outline-0"
                type="tel"
                name="mobile"
                id="mobile"
                defaultValue={formData?.mobile}
                required
              />
            </div>

            <div className="mb-1 rounded-sm border border-[#e5e5e5] px-3 py-2">
              <Label
                className="flex items-center justify-between"
                htmlFor="alternateMobile"
              >
                Alternate Mobile Number
                <span className="cursor-pointer text-xs font-medium text-[#FF6700]">
                  Edit
                </span>
              </Label>
              <input
                className="w-full text-sm text-[#1a1a1a] outline-0"
                type="tel"
                name="alternateMobile"
                id="alternateMobile"
                defaultValue={formData?.alternateMobile}
              />
            </div>

            <div className="border border-[#ccc] bg-[#f2f2f2] px-4 py-3">
              <span className="text-sm font-medium">Disclaimer</span>
              <p className="text-justify text-xs text-[#666]">
                This information will be updated only in Bajaj Finance Ltd.’s
                records and not for Insurance, Co-branded Credit Card & Mutual
                Fund products. To view complete details, please login to the
                Bajaj Finserv App.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <button
                className="cursor-pointer bg-gray-200 px-4 py-2 text-sm font-medium"
                type="reset"
                onClick={handleResetClick}
              >
                RESET
              </button>

              <button className="cursor-pointer bg-[#002953] px-4 py-2 text-sm font-medium text-white">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <Feedback onClose={onClose} />
      </Modal>
    </>
  );
};

export default Form;
