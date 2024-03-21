#!/usr/bin/env node

const getCurrentISOWeek = (date: Date) => {
  const dayOfWeek = date.getDay();
  const currentDay = date.getDate();

  // Set to nearest Thursday: current date + 3 - dayOfWeek from Thu (4)
  date.setDate(currentDay + 3 - ((dayOfWeek + 6) % 7));

  // January 4 is always in the first week
  const firstWeekDate = new Date(date.getFullYear(), 0, 4);

  // Calculate full weeks to nearest Thursday
  const weekNumber = Math.round(((date.getTime() - firstWeekDate.getTime()) / 86400000 - 3 + ((firstWeekDate.getDay() + 6) % 7)) / 7) + 1;

  return weekNumber;
};

export default getCurrentISOWeek;

if (require.main === module) {
  console.log(getCurrentISOWeek(new Date()));
}
