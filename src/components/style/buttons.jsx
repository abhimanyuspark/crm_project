import React from "react";

const Button = ({ icon, text, onClick, type, loading = false }) => {
  return (
    <button
      onClick={onClick}
      type={type || "submit"}
      className="py-2 px-3 bg-blue-500 flex justify-center items-center rounded-md text-white hover:bg-black"
    >
      <div className="flex justify-between items-center gap-2">
        {loading ? "loading..." : icon && icon}
        <span className="text-lg">{text && text}</span>
      </div>
    </button>
  );
};

export { Button };
