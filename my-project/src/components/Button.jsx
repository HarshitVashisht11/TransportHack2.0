const Button = ({
    label,
    iconURL,
    fullWidth,
  }) => {
    return (
      <button
        className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
     bg-cyan-500 text-white rounded-full ${fullWidth && "w-full"}`}
      >
        {label}
      </button>
    );
  };
  
  export default Button;
  