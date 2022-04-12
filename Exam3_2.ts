const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const daysNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const formatGroups = [
  {
    startingSymbol: "Y",
    tokenTypes: ["YYYY"],
    formatter: (element: Date): number => {
      return element.getFullYear();
    },
  },
  {
    startingSymbol: "M",
    tokenTypes: ["MMMM", "MMM", "MM", "M"],
    formatter: (element: Date, token: string): string => {
      switch (token) {
        case "MMMM":
          return monthNames[element.getMonth()];
        case "MMM":
          return monthNames[element.getMonth()].substring(0, 3);
        case "MM":
          return element.getMonth() > 9
            ? element.getMonth().toString()
            : "0" + element.getMonth();
        case "M":
          return element.getMonth().toString();
        default:
          throw `token ${token} not supported`;
      }
    },
  },
  {
    startingSymbol: "D",
    tokenTypes: ["DD", "Do", "D"],
    formatter: (element: Date, token: string): string => {
      switch (token) {
        case "DD":
          return element.getDate() > 9
            ? "" + element.getDate()
            : "0" + element.getDate();
        case "D":
          return "" + element.getDate();
        case "Do":
          if (element.getDate() > 3 && element.getDate() < 21)
            return element.getDate() + "th";
          switch (element.getDate() % 10) {
            case 1:
              return element.getDate() + "st";
            case 2:
              return element.getDate() + "nd";
            case 3:
              return element.getDate() + "rd";
            default:
              return element.getDate() + "th";
          }
        default:
          throw `token ${token} not supported`;
      }
    },
  },
  {
    startingSymbol: "d",
    tokenTypes: ["dddd", "ddd"],
    formatter: (element: Date, token: string): string => {
      switch (token) {
        case "dddd":
          return daysNames[element.getDay()];
        case "ddd":
          return daysNames[element.getDay()].substring(0, 3);
        default:
          throw `token ${token} not supported`;
      }
    },
  },
  {
    startingSymbol: "E",
    tokenTypes: "E",
    formatter: (element: Date): number => {
      return element.getDay();
    },
  },
  {
    startingSymbol: "H",
    tokenTypes: ["HH", "H"],
    formatter: (element: Date, token: string): string => {
      switch (token) {
        case "HH":
          if (element.getHours() > 9) {
            return element.getHours() < 9
              ? "0" + element.getHours()
              : "" + element.getHours();
          }
        case "H":
          return "" + element.getHours();
        default:
          throw `token ${token} not supported`;
      }
    },
  },
  {
    startingSymbol: "m",
    tokenTypes: ["mm", "m"],
    formatter: (element: Date, token: string): string => {
      switch (token) {
        case "mm":
          return element.getMinutes() > 9
            ? "" + element.getMinutes()
            : "0" + element.getMinutes();
        case "m":
          return "" + element.getMinutes();
        default:
          throw `token ${token} not supported`;
      }
    },
  },
  {
    startingSymbol: "s",
    tokenTypes: ["ss", "s"],
    formatter: (element: Date, token: string): string => {
      switch (token) {
        case "ss":
          return element.getSeconds() > 9
            ? "" + element.getSeconds()
            : "0" + element.getSeconds();
        case "s":
          return "" + element.getSeconds();
        default:
          throw `token ${token} not supported`;
      }
    },
  },
  {
    startingSymbol: "A",
    tokenTypes: "A",
    formatter: (element: Date): string => {
      return element.getHours() >= 12 ? "PM" : "AM";
    },
  },
  {
    startingSymbol: "a",
    tokenTypes: "a",
    formatter: (element: Date): string => {
      return element.getHours() >= 12 ? "pm" : "am";
    },
  },
  {
    startingSymbol: "W",
    tokenTypes: ["WW", "Wo", "W"],
    formatter: (element: Date, token: string): string => {
      let yearStart: Date;
      let weekNo: number;
      switch (token) {
        case "WW":
          yearStart = new Date(Date.UTC(element.getUTCFullYear(), 0, 1));
          weekNo = Math.ceil(
            ((element.getTime() - yearStart.getTime()) / 86400000 + 1) / 7
          );
          return weekNo > 9 ? weekNo + " " : "0" + weekNo + " ";
        case "W":
          yearStart = new Date(Date.UTC(element.getUTCFullYear(), 0, 1));
          weekNo = Math.ceil(
            ((element.getTime() - yearStart.getTime()) / 86400000 + 1) / 7
          );
          return weekNo + " ";
        case "Wo":
          yearStart = new Date(Date.UTC(element.getUTCFullYear(), 0, 1));
          weekNo = Math.ceil(
            ((element.getTime() - yearStart.getTime()) / 86400000 + 1) / 7
          );
          if (weekNo > 3 && weekNo < 21) return weekNo + "th";
          switch (weekNo % 10) {
            case 1:
              return weekNo + "st";
            case 2:
              return weekNo + "nd";
            case 3:
              return weekNo + "rd";
            default:
              return weekNo + "th";
          }
        default:
          throw `token ${token} not supported`;
      }
    },
  },
  {
    startingSymbol: "Q",
    tokenTypes: "Q",
    formatter: (element: Date): number => {
      const m = Math.floor(element.getMonth() / 3) + 2;
      return m > 4 ? m - 4 : m;
    },
  },
  {
    startingSymbol: "z",
    tokenTypes: ["zz", "z"],
    formatter: (element: Date): string => {
      let timeZone = element.toString();
      return timeZone.substring(
        timeZone.indexOf("(") + 1,
        timeZone.indexOf(")")
      );
    },
  },
];

interface IntervalsType {
  type: string;
  milliseconds: number;
}

const timeIntervals32: IntervalsType[] = [
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
class ExDate extends Date {
  toDateString32(template: string): string {
    let output = "";

    for (let i = 0; i < template.length; i++) {
      const foundGroup = formatGroups.find(
        (x) => x.startingSymbol === template[i]
      );
      if (foundGroup) {
        for (let j = 0; j < foundGroup.tokenTypes.length; j++) {
          const lookAheadString = template.slice(
            i,
            i + foundGroup.tokenTypes[j].length
          );
          if (lookAheadString === foundGroup.tokenTypes[j]) {
            output += foundGroup.formatter(this, lookAheadString);
            i = i + lookAheadString.length - 1;
            break;
          }
        }
      } else {
        output += template[i];
      }
    }
    return output;
  }
  timeDiff(oldDate: Date): string {
    const diffTime = Math.abs(this.getTime() - oldDate.getTime());
    const timeInterval = timeIntervals32.find(
      (x) => x.milliseconds < diffTime
    )!;
    const diff = Math.ceil(diffTime / timeInterval.milliseconds);

    return `${diff} ${timeInterval.type}(s) ago`;
  }
}

const exDate = new ExDate();
console.log(
  exDate.toDateString32("YYYY-MMM-DD HH:mm:ss Is my proof of concept!")
  //   exDate.timeDiff(new Date("2022-03-21 17:58:00"))
);
