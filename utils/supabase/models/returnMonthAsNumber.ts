export default function getMonthNumber(monthName: string): number {
  if (monthName === undefined) {
    return new Date().getMonth();
  }
  const monthMap: { [key: string]: number } = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
  };

  return monthMap[monthName] || 0; // Returns 0 if the month name is invalid
}
