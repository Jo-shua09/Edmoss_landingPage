export const ButtonOne = ({ className, name, icon }) => {
  return (
    <button
      className={`bg-blue-950 flex items-center gap-x-5  capitalize text-nowrap py-7 px-8 font-semibold text-white text-3xl  rounded-xl hover:scale-95 hover:shadow-lg ${className}`}
    >
      {name}
      {icon}
    </button>
  );
};

export const ButtonTwo = ({ className, name }) => {
  return (
    <button
      className={`bg-transparent border border-blue-950 capitalize text-nowrap py-7 px-8 font-semibold text-blue-950 text-3xl  rounded-xl hover:scale-95 hover:shadow-lg ${className}`}
    >
      {name}
    </button>
  );
};
