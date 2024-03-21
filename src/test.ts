import getCurrentISOWeek from "./index";

const testCases: [Date, number][] = [
  // [date, expectedWeekNumber]
  // Start of the year, might belong to the last week of the previous year
  [new Date("2023-01-01"), 52],
  [new Date("2023-01-02"), 1],
  // End of the year, might belong to the first week of the next year
  [new Date("2024-12-29"), 52],
  [new Date("2024-12-30"), 1],
  [new Date("2024-12-31"), 1],
  // A date in April for a straightforward case
  [new Date("2024-04-15"), 16],
  // Leap year, February 29
  [new Date("2024-02-29"), 9],
  // Non-leap year, February 28
  [new Date("2023-02-28"), 9],
  // The week with January 4th
  [new Date("2024-01-04"), 1],
  // Boundary days of the week (example using a Sunday and the following Monday)
  [new Date("2024-01-07"), 1],
  [new Date("2024-01-08"), 2],
];

describe("getCurrentISOWeek", () => {
  test.each(testCases)("given the date %s, returns the ISO week number %i", (dateInput, expectedWeekNumber) => {
    const weekNumber = getCurrentISOWeek(dateInput);
    expect(weekNumber).toBe(expectedWeekNumber);
  });
});
