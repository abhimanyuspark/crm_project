import React from "react";

const Button = ({
  height = "40px",
  icon,
  text,
  onClick,
  type,
  loading = false,
}) => {
  return (
    <button
      onClick={onClick}
      type={type || "submit"}
      style={{ height: height, transition: "all 0.2s ease" }}
      className="px-3 bg-blue-600 flex justify-center items-center rounded-[0.2rem] text-white hover:bg-black"
    >
      <div className="flex items-center gap-3">
        {loading ? "loading..." : icon && icon}
        <span className="text-lg">{text && text}</span>
      </div>
    </button>
  );
};

const CancelButton = ({
  height = "40px",
  icon,
  text,
  onClick,
  type,
  loading = false,
}) => {
  return (
    <button
      onClick={onClick}
      type={type || "submit"}
      style={{ height: height, transition: "all 0.2s ease" }}
      className="px-3 bg-white flex justify-center items-center rounded-[0.2rem] hover:bg-black hover:text-white"
    >
      <div className="flex items-center gap-3">
        {loading ? "loading..." : icon && icon}
        <span className="text-lg">{text && text}</span>
      </div>
    </button>
  );
};

export { Button, CancelButton };
