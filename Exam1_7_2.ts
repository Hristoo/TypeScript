function toISOString(dateInput: Date): string {
  let date = {
    year: dateInput.getFullYear(),
    month: dateInput.getMonth() + 1,
    day: dateInput.getDate(),
    hours: dateInput.getHours(),
    minutes: dateInput.getMinutes(),
    seconds: dateInput.getSeconds(),
    milliSeconds: dateInput.getMilliseconds(),
  };

  Object.entries(date).forEach(([key, value], index) => {
    date[key] = pad(value, index != 6 ? 2 : 3);
  });

  return `${date.year}-${date.month}-${date.day}T${date.hours}:${date.minutes}:${date.milliSeconds}Z`;
}

function pad(num: number, index: number): string {
  const dateToString = num.toString().padStart(index, "0");

  return dateToString;
}
console.log(toISOString(new Date()));