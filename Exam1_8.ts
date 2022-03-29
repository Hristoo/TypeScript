const timeIntervals: Interval[] = [
  {
    type: "year",
    milliseconds: 31556952000,
  },
  {
    type: "month",
    milliseconds: 2629800000,
  },
  {
    type: "week",
    milliseconds: 604800000,
  },
  {
    type: "day",
    milliseconds: 86400000,
  },
  {
    type: "hour",
    milliseconds: 3600000,
  },
  {
    type: "minute",
    milliseconds: 60000,
  },
  {
    type: "second",
    milliseconds: 1000,
  },
];

type Interval = {
  type: string;
  milliseconds: number;
};

function timeDiff(newDate: Date, oldDate: Date): string {
  const diffTime = Math.abs(newDate.getTime() - oldDate.getTime());

  const timeInterval = timeIntervals.find((x) => x.milliseconds < diffTime)!; // is it possible to be fixed diffrent way

  const diff = Math.ceil(diffTime / timeInterval.milliseconds);

  return `${diff} ${timeInterval.type}(s) ago`;
}
console.log(
  timeDiff(new Date("2022-01-20 10:00:00"), new Date("2022-02-01 10:00:00"))
);
