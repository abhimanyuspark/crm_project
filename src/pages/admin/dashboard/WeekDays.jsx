import React, { memo } from "react";

const getWeekDates = () => {
  const today = new Date();
  const currentDay = today.getDay();
  // It will gave me a number like 0,1,2...6 that represents day of the weeks
  const startingDateOfTheWeek = today.getDate() - currentDay;
  const startOfWeek = new Date(today.setDate(startingDateOfTheWeek));
  const weekDates = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    weekDates.push(date.toLocaleDateString());
  }

  return weekDates;
};

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// const colors = ["red", "blue", "green", "purple", "orange", "yellow", "gray"];

const WeeksDays = memo(() => {
  const weekDates = getWeekDates();

  return (
    <>
      <div className="flex justify-between p-4 border-b border-slate-200">
        <h2 className="text-lg font-bold">Weekly Timelogs</h2>
      </div>
      <div className="flex gap-2 p-4">
        {days.map((day, index) => (
          <Day key={index} dayName={day} date={weekDates[index]} />
        ))}
      </div>
    </>
  );
});

const Day = ({ dayName, date }) => {
  const today = new Date().getDay();
  const isToday =
    days[today].slice(0, 3) === dayName.slice(0, 3)
      ? "bg-blue-600 text-white"
      : "hover:bg-slate-200";

  return (
    <div
      data-tooltip-id="my-tooltip"
      data-tooltip-content={`${date}`}
      data-tooltip-place="bottom"
      className={`flex items-center justify-center text-xs rounded-full w-9 aspect-square border border-slate-300 cursor-pointer ${isToday}`}
    >
      {dayName.slice(0, 2)}
    </div>
  );
};

export default WeeksDays;
