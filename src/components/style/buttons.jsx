import React from "react";

const Loader = () => {
  return (
    <div className="w-4 h-4 mx-auto loader ease-linear rounded-full border-2 border-white"></div>
  );
};

const Button = ({
  height = "40px",
  icon = "",
  text = "Submit",
  onClick,
  type = "submit",
  loading = false,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      style={{ height: height, transition: "all 0.2s ease" }}
      className="px-3 bg-blue-600 flex justify-center items-center rounded-[0.2rem] text-white hover:bg-black"
    >
      <div className="flex items-center gap-3">
        {loading ? <Loader /> : icon}
        <span className="text-lg">{loading ? "Loading..." : text}</span>
      </div>
    </button>
  );
};

const CancelButton = ({
  height = "40px",
  icon,
  text,
  onClick,
  type = "submit",
  loading = false,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      style={{ height: height, transition: "all 0.2s ease" }}
      className="px-3 bg-white flex justify-center items-center rounded-[0.2rem] hover:bg-black hover:text-white"
    >
      <div className="flex items-center gap-3">
        {loading ? <Loader /> : icon && icon}
        <span className="text-lg">{text && text}</span>
      </div>
    </button>
  );
};

const ClearButton = ({ onClick, text = "Clear" }) => {
  return (
    <button
      className="border border-black px-3 py-[6px] text-base rounded-[4px] hover:bg-black hover:text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export { Button, CancelButton, ClearButton };
