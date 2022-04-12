const formats = [
  {
    format: "HH",
    dataFormatFunction: (element: Date, hoursFormat: boolean): string => {
      const hour = hoursFormat ? element.getHours() % 12 : element.getHours();
      return hoursFormat
        ? hour <= 9
          ? "0" + hour
          : "" + hour
        : hour <= 9
        ? "0" + hour
        : "" + hour;
    },
  },
  {
    format: "H",
    dataFormatFunction: (element: Date, hoursFormat: boolean): string => {
      return hoursFormat
        ? " " + (element.getHours() % 12)
        : "" + element.getHours();
    },
  },
  {
    format: "mm",
    dataFormatFunction: (element: Date): string => {
      return element.getMinutes() > 9
        ? "" + element.getMinutes()
        : "0" + element.getMinutes();
    },
  },
  {
    format: "m",
    dataFormatFunction: (element: Date): string => {
      return "" + element.getMinutes();
    },
  },
  {
    format: "ss",
    dataFormatFunction: (element: Date): string => {
      return element.getSeconds() > 9
        ? "" + element.getSeconds()
        : "0" + element.getSeconds();
    },
  },
  {
    format: "s",
    dataFormatFunction: (element: Date): string => {
      return "" + element.getSeconds();
    },
  },
  {
    format: "A",
    dataFormatFunction: (element: Date): string => {
      return element.getHours() >= 12 ? "PM" : "AM";
    },
  },
  {
    format: "a",
    dataFormatFunction: (element: Date): string => {
      return element.getHours() >= 12 ? "pm" : "am";
    },
  },
];

export function dateFormat(dateInput: Date, format: string, timeZone?: string) {
  let tokens = format.replace(/\W/g, " ");
  let tokensArr = tokens.split(" ");
  let formatedDateString = "";
  tokensArr.forEach((element) => {
    const formatedValues = formats.find((x) => x.format === element);
    if (formatedValues) {
      formatedDateString = formatedValues.dataFormatFunction(
        dateInput,
        new RegExp(/A/gi).test(format)
      );
      format = format.replace(element, formatedDateString);
    }
  });
  return format;
}

const timeZones = [
  {
    name: "America/New_York",
    offset: -5,
  },
  {
    name: "Asia/Singapore",
    offset: 8,
  },
  {
    name: "Europe/Sofia",
    offset: 2,
  },
  {
    name: "Europe/Moscow",
    offset: 3,
  },
  {
    name: "Europe/London",
    offset: 0,
  },
];

export function utfTimeToLocal(date: Date, timeZone: string) {
  const timeZoneObj = timeZones.find((x) => x.name === timeZone);
  if (timeZoneObj) {
    const offset = timeZoneObj.offset;
    date.setHours(date.getUTCHours() + offset);
    return date;
  }
 throw new Error("Timezone is not valid!");
 
  
}
