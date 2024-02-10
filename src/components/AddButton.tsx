import AddIcon from "./AddIcon";

interface Props {
  show?: boolean;
}

export default ({ show = true }: Props) => {
  if (!show) return null;
  return (
    <button className="h-12 w-12 flex justify-center items-center cursor-pointer">
      <div className="text-white font-extrabold text-4xl">
        <AddIcon />
      </div>
    </button>
  );
};
