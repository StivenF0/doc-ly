import CloseIcon from "./CloseIcon";
import { setSidebarShow, sidebarShow } from "../stores/storeSidebar";
import { useStore } from "@nanostores/react";

interface Props {
  children?: any;
}

export default ({ children }: Props) => {
  const $sidebarShow = useStore(sidebarShow);

  const handleClick = () => {
    setSidebarShow(false);
  };

  return (
    <div
      className={`absolute top-0 left-0 w-full h-full z-10 bg-gray-800/60 transition-opacity duration-300 ${
        $sidebarShow ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-white absolute h-full z-20 top-0 w-80 transition-all duration-300 pt-4 pr-5 ${
          $sidebarShow ? "left-0" : "-left-80 pointer-events-none"
        }`}
      >
        <div className="flex w-full justify-end items-center">
          <button className="text-4xl text-green-500" onClick={handleClick}>
            <CloseIcon />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
