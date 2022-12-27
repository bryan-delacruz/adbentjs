function countHours(year, holidays) {
  return (
    holidays
      .map((e) => {
        let date = new Date(`${year}/${e}`);
        return [1, 2, 3, 4, 5].includes(date.getDay());
      })
      .reduce((count, extraHour) => count + extraHour) * 2
  );
}
const year = 2022;
const holidays = ["01/06", "04/01", "12/25"];
countHours(year, holidays);
