import { setSidebarShow } from "../stores/storeSidebar";
import ArrowBackIcon from "./ArrowBackIcon";
import MenuIcon from "./MenuIcon";

interface Props {
  type: "sidebar" | "arrow";
}

export default ({ type }: Props) => {
  const handleClick = () => {
    setSidebarShow(true);
    console.log("Clicked!");
  };

  if (type === "sidebar") {
    return (
      <button
        className="h-12 w-12 flex justify-center items-center"
        onClick={handleClick}
      >
        <div className="text-white font-extrabold text-4xl">
          <MenuIcon />
        </div>
      </button>
    );
  } else {
    <button className="h-12 w-12 flex justify-center items-center">
      <div className="text-white font-semibold text-4xl">
        <ArrowBackIcon />
      </div>
    </button>;
  }
};
