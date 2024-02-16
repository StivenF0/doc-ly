import { setSidebarShow } from "../stores/storeSidebar";
import ArrowBackIcon from "./ArrowBackIcon";
import MenuIcon from "./MenuIcon";

interface Props {
  type: "sidebar" | "arrow";
}

export default ({ type }: Props) => {
  const handleClick = () => {
    setSidebarShow(true);
  };

  if (type === "sidebar") {
    return (
      <button
        className="h-12 w-12 flex justify-center items-center cursor-pointer"
        onClick={handleClick}
      >
        <div className="text-white font-extrabold text-4xl">
          <MenuIcon />
        </div>
      </button>
    );
  } else {
    return (
      <a
        className="h-12 w-12 flex justify-center items-center cursor-pointer"
        href="/"
        aria-label="HomePage"
      >
        <div className="text-white font-semibold text-4xl">
          <ArrowBackIcon />
        </div>
      </a>
    );
  }
};
