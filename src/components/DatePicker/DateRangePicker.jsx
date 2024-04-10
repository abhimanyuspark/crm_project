import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { rangePresets } from "./data";

const DateRangePicker = ({
  value = { start: new Date(), end: new Date() },
  onChange = (p) => p,
}) => {
  const handleStartDateChange = (date) => {
    onChange(date);
  };

  const handleEndDateChange = (date) => {
    onChange(date);
  };

  return (
    <div className="relative flex gap-4 p-2 items-center group/show hover:bg-slate-200 rounded-sm">
      <p className="text-base font-semibold">Date Range</p>

      <ul className="group-hover/show:visible invisible absolute top-10 left-0 w-28 h-auto bg-white border border-slate-300 z-10">
        {rangePresets?.map((d, i) => (
          <li
            key={i}
            className={`${
              value?.start === d?.value[0] && value?.end === d?.value[1]
                ? "bg-slate-500 text-white"
                : "hover:bg-slate-300"
            } p-2 text-sm cursor-pointer`}
            onClick={() => {
              onChange(d?.value);
            }}
          >
            {d?.label}
          </li>
        ))}
      </ul>

      <div className="flex gap-2 items-center">
        <DatePicker
          selected={value?.start}
          onChange={handleStartDateChange}
          selectsStart
          startDate={value?.start}
          endDate={value?.end}
          className="w-20 border-0 focus:outline-0 bg-transparent"
          calendarClassName="left-20 -top-[2px] border-slate-300"
          showYearDropdown
          showMonthDropdown
          placeholderText="Start date"
          maxDate={value?.end}
        />
        <span>To</span>
        <DatePicker
          selected={value?.end}
          onChange={handleEndDateChange}
          selectsEnd
          startDate={value?.start}
          endDate={value?.end}
          className="w-20 border-0 focus:outline-0 bg-transparent"
          calendarClassName="left-20 -top-[2px] border-slate-300"
          showYearDropdown
          showMonthDropdown
          placeholderText="End date"
          minDate={value?.start}
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
