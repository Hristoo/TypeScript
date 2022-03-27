function toISOString(dateInput) {
    var dateInfoInput = [
        dateInput.getFullYear(),
        dateInput.getMonth(),
        dateInput.getDate(),
        dateInput.getHours(),
        dateInput.getMinutes(),
        dateInput.getSeconds(),
        dateInput.getMilliseconds(),
    ];
    var delimiters = ["-", "-", "T", ":", ":", ".", "Z"];
    var dateInfo = dateInfoInput.map(function (x) { return pad(x, 2); });
    var dateString = "";
    for (var i = 0; i < dateInfo.length; i++) {
        dateString += dateInfo[i] + delimiters[i];
    }
    return dateString;
}
function pad(num, index) {
    var dateToString = num.toString().padStart(index, "0");
    return dateToString;
}
console.log(toISOString(new Date()));
