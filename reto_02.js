function countHours(year, holidays) {
  let extraHours = 0;
  holidays.forEach((e) => {
    let [month, day] = e.split("/");

    let date = new Date(`${year}-${month}-${day}`);
    console.log(date);
    if ([1, 2, 3, 4, 5].includes(date.getDay())) {
      extraHours = extraHours + 2;
    }
  });

  return extraHours;
}