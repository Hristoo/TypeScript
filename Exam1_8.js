var timeIntervals = [
    {
        type: "year",
        milliseconds: 31556952000
    },
    {
        type: "month",
        milliseconds: 2629800000
    },
    {
        type: "week",
        milliseconds: 604800000
    },
    {
        type: "day",
        milliseconds: 86400000
    },
    {
        type: "hour",
        milliseconds: 3600000
    },
    {
        type: "minute",
        milliseconds: 60000
    },
    {
        type: "second",
        milliseconds: 1000
    },
];
function timeDiff(newDate, oldDate) {
    var diffTime = Math.abs(newDate.getTime() - oldDate.getTime());
    var timeInterval = timeIntervals.find(function (x) { return x.milliseconds < diffTime; }); // is it possible to be fixed diffrent way
    var diff = Math.ceil(diffTime / timeInterval.milliseconds);
    return "".concat(diff, " ").concat(timeInterval.type, "(s) ago");
}
console.log(timeDiff(new Date("2022-01-20 10:00:00"), new Date("2022-02-01 10:00:00")));
