import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRangePicker = () => {
  const [dates, setDates] = useState({
    start: new Date("2014/02/08"),
    end: new Date("2014/03/10"),
  });

  const handleStartDateChange = (date) => {
    setDates({ ...dates, start: date });
  };

  const handleEndDateChange = (date) => {
    setDates({ ...dates, end: date });
  };

  return (
    <div className="flex gap-2 items-center">
      Date Range:
      <div>
        <DatePicker
          selected={dates.start}
          onChange={handleStartDateChange}
          selectsStart
          startDate={dates.start}
          endDate={dates.end}
          className="w-20 p-2 border-0"
          calendarClassName="left-52"
          monthsShown={2}
        />
      </div>
      <span>-</span>
      <div>
        <DatePicker
          selected={dates.end}
          onChange={handleEndDateChange}
          selectsEnd
          startDate={dates.start}
          endDate={dates.end}
          minDate={dates.start}
          className="w-20 p-2 border-0"
          calendarClassName="left-52"
          monthsShown={2}
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
