import logo from "../assets/Bajaj_Finserv_Logo_Reverse.png";
import BackIcon from "../assets/Back.svg?react";

const Header = () => {
  return (
    <header className="flex min-h-16 items-center bg-[#002953] text-white max-sm:px-4 sm:px-15">
      <div className="flex items-center gap-x-10">
        <img className="max-sm:hidden" src={logo} alt="Company Logo" />
        <BackIcon />
      </div>
      <div className="grow text-center text-lg font-medium">
        Personal information
      </div>
    </header>
  );
};

export default Header;
