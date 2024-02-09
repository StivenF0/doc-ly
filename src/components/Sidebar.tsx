import { useState } from "react";
import CloseIcon from "./CloseIcon";

interface Props {
  children?: any;
}

export default ({ children }: Props) => {
  const [sidebar, setSidebar] = useState(true);

  const handleClick = () => {
    setSidebar(!sidebar);
  };

  return (
    <div
      className={`absolute top-0 left-0 w-full h-full z-10 bg-gray-800/60 transition-opacity duration-300 ${
        sidebar ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white absolute h-full z-20 top-0 w-80 transition-all duration-300 pt-4 pr-5 ${
          sidebar ? "left-0" : "-left-80"
        }`}
      >
        <div className="flex w-full justify-end items-center">
          <button className="text-3xl" onClick={handleClick}>
            <CloseIcon />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
