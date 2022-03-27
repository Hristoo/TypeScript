function toISOString(dateInput) {
    var date = {
        year: dateInput.getFullYear(),
        month: dateInput.getMonth() + 1,
        day: dateInput.getDate(),
        hours: dateInput.getHours(),
        minutes: dateInput.getMinutes(),
        seconds: dateInput.getSeconds(),
        milliSeconds: dateInput.getMilliseconds()
    };
    Object.entries(date).forEach(function (_a, index) {
        var key = _a[0], value = _a[1];
        date[key] = pad(value, index != 6 ? 2 : 3);
    });
    return "".concat(date.year, "-").concat(date.month, "-").concat(date.day, "T").concat(date.hours, ":").concat(date.minutes, ":").concat(date.milliSeconds, "Z");
}
function pad(num, index) {
    var dateToString = num.toString().padStart(index, "0");
    return dateToString;
}
console.log(toISOString(new Date()));
