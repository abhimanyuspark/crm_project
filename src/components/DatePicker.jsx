import React from "react";
import DatePicker from "react-datepicker";

const ReactDatePicker = ({
  value = new Date(),
  onChange,
  dateFormat = "dd/MM/yyyy",
  ...rest
}) => {
  return (
    <DatePicker
      selected={value}
      onChange={onChange}
      dateFormat={dateFormat}
      className="w-full border border-slate-300 hover:border-black p-[6px] rounded-[0.2rem]"
      {...rest}
    />
  );
};

export default ReactDatePicker;
