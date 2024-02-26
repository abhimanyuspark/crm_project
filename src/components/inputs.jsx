import React from "react";

const InputText = ({ placeholder, className }) => {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder={placeholder}
        className={`${className} w-full py-2 rounded-sm`}
      />
    </div>
  );
};

export { InputText };
