const today = new Date();
const startOfLast30Days = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 29
);
const endOfLast30Days = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() + 1
);
const startOfThisMonth = new Date(today.getFullYear(), today.getMonth(), 1);
const endOfThisMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
const startOfLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
const endOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
const startOfLast90Days = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 89
);
const startOfLast6Months = new Date(
  today.getFullYear(),
  today.getMonth() - 6,
  today.getDate()
);
const startOfLastYear = new Date(
  today.getFullYear() - 1,
  today.getMonth(),
  today.getDate()
);

export const rangePresets = [
  { label: "Today", value: [today, today] },
  { label: "Last 30 Days", value: [startOfLast30Days, endOfLast30Days] },
  { label: "This Month", value: [startOfThisMonth, endOfThisMonth] },
  { label: "Last Month", value: [startOfLastMonth, endOfLastMonth] },
  { label: "Last 90 Days", value: [startOfLast90Days, today] },
  { label: "Last 6 Months", value: [startOfLast6Months, today] },
  { label: "Last 1 Year", value: [startOfLastYear, today] },
];
