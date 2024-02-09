import ArrowBackIcon from "./ArrowBackIcon";
import MenuIcon from "./MenuIcon";

interface Props {
  type: "sidebar" | "arrow";
}

export default ({ type }: Props) => {
  return (
    <button className="h-12 w-12 flex justify-center items-center">
      {type === "sidebar" ? (
        <div className="text-white font-extrabold text-4xl">
          <MenuIcon />
        </div>
      ) : (
        <div className="text-white font-semibold text-4xl">
          <ArrowBackIcon />
        </div>
      )}
    </button>
  );
};
