import React, { useState, useEffect, useRef } from "react";

const InputText = ({
  value,
  type = "text",
  placeholder,
  onChange,
  icon,
  button,
  label,
  important,
  focus,
  width,
  height,
  error,
  name,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex gap-2 flex-col">
      <label
        htmlFor={name}
        className="text-slate-600 cursor-pointer flex gap-1"
      >
        {label}
        {important && <sup className="text-red-500 text-base static">*</sup>}
      </label>

      <div
        className={`${width || "w-full"} ${
          height || "h-10"
        } flex items-center border rounded-md overflow-hidden ${
          isFocused && "outline-blue-500 outline outline-1"
        } ${
          error
            ? "border-red-500 outline outline-red-500 outline-1"
            : "border-slate-300"
        }`}
      >
        {icon && (
          <div className="p-2 border-r border-slate-300 hover:bg-slate-200 cursor-pointer flex items-center h-full">
            {icon}
          </div>
        )}
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          className="w-full h-full outline-none p-2"
          onChange={onChange}
          autoFocus={focus}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
        />
        {button && (
          <div className="p-2 border-l border-slate-300 hover:bg-slate-200 cursor-pointer flex items-center h-full">
            {button}
          </div>
        )}
      </div>

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

const CheckBox = ({
  label,
  indeterminate,
  disabled,
  onChange,
  checked,
  important,
  name,
  className,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return (
    <div className="flex gap-2 items-center">
      <input
        type="checkbox"
        id={name}
        ref={ref}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={className + " aspect-square"}
      />
      {label && (
        <label
          htmlFor={name}
          className="text-slate-600 text-sm cursor-pointer flex gap-1"
        >
          {label}
          {important && <sup className="text-red-500 text-base static">*</sup>}
        </label>
      )}
    </div>
  );
};

const InputSelect = ({ value, onChange, children }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="border border-slate-300 p-2 rounded-[0.2rem]"
    >
      {children}
    </select>
  );
};

export { InputText, CheckBox, InputSelect };
