export default () => {
  const sidebar = false;

  return (
    <div
      className={`absolute top-0 left-0 w-full h-full z-10 bg-gray-800/60 transition-opacity ${
        sidebar ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="bg-red-500 absolute h-full z-20 left-0 top-0 w-80"></div>
    </div>
  );
};