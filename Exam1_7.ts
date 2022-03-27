function toISOString(dateInput: Date): string{
  let dateInfoInput = [
    dateInput.getFullYear(),
    dateInput.getMonth(),
    dateInput.getDate(),
    dateInput.getHours(),
    dateInput.getMinutes(),
    dateInput.getSeconds(),
    dateInput.getMilliseconds(),
  ];

  const delimiters = ["-", "-", "T", ":", ":", ".", "Z"];

  const dateInfo = dateInfoInput.map((x) => pad(x, 2));
  let dateString = "";

  for (let i = 0; i < dateInfo.length; i++) {
    dateString += dateInfo[i] + delimiters[i];
  }

  return dateString;
}

function pad(num: number, index: number):string {
  const dateToString = num.toString().padStart(index, "0");

  return dateToString;
}

console.log(toISOString(new Date()));