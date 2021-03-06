import { isObj, compareArrays } from "./lib";

interface DataTypes {
  id: string;
  typeOfValue: string;
  resultsProperty: string;
  testerFunction?: Function;
}

const dataTypes: DataTypes[] = [
  {
    id: "nulls",
    typeOfValue: "object",
    resultsProperty: "nullCount",
    testerFunction: (element: null): boolean => {
      return element === null;
    },
  },
  {
    id: "objects",
    typeOfValue: "object",
    resultsProperty: "objectsCount",
    testerFunction: (element: object): boolean => {
      return element != null && element != undefined;
    },
  },
  {
    id: "strings",
    typeOfValue: "string",
    resultsProperty: "stringsCount",
  },
  {
    id: "numbers",
    typeOfValue: "number",
    resultsProperty: "numericsCount",
  },
  {
    id: "arrays",
    typeOfValue: "object",
    resultsProperty: "arraysCount",
    testerFunction: (element: any[]): boolean => {
      return Array.isArray(element);
    },
  },
  {
    id: "undefined",
    typeOfValue: "undefined",
    resultsProperty: "undefinedCount",
    testerFunction: (element: undefined): boolean => {
      return element === undefined;
    },
  },
  {
    id: "booleans",
    typeOfValue: "boolean",
    resultsProperty: "booleansCount",
  },
  {
    id: "functions",
    typeOfValue: "function",
    resultsProperty: "functionsCount",
  },
];

class ExtendedArray extends Array {

  oddCounter(): number {
    let counter = 0;
    
    this.forEach((element) => {
      if (element % 2 == 0) {
        counter++;
      }
    });

    return counter;
  }

  bubbleSort(): number[] {
    let isDone = false;

    while (!isDone) {
      isDone = true;
      
      for (let i = 1; i < this.length; i += 1) {
        let curEl = this[i];
        let prevEl = this[i];
        if (this[i - 1] > curEl) {
          isDone = false;
          let tmp = prevEl;
          prevEl = curEl;
          curEl = tmp;
        }
      }
    }

    return this;
  }

  calculateDataTypes(): object {
    const result = {};
    dataTypes.forEach((x) => (result[x.resultsProperty] = 0));

    this.forEach((element) => {
      const typeOfElement = typeof element;

      const types = dataTypes.filter((x) => x.typeOfValue === typeOfElement);
      for (let i = 0; i < types.length; i++) {
        let curType = types[i];
        if (!curType.testerFunction) {
          result[curType.resultsProperty]++;
          break;
        } else if (curType.testerFunction(element)) {
          result[curType.resultsProperty]++;
          break;
        }
      }
    });

    return result;
  }
  concatTruthyElementsOfArray(secondInput: unknown[]): any[] {
    const truthyElements =
      typeof secondInput !== "number"
        ? secondInput.filter((el) => !!el)
        : undefined;

    for (let i = 0; i < this.length; i++) {
      if (Array.isArray(this[i])) {
        this[i] = this[i].concat(truthyElements);
      }
    }

    return this;
  }

  appender( secondInput: unknown[]): any[] {
    let cacheArrays: any[] = [];
    let cacheObjects = [];

    for (let j = 0; j < secondInput.length; j++) {
      if (Array.isArray(secondInput[j])) {
        cacheArrays = cacheArrays.concat(secondInput[j]);
      } else if (isObj(secondInput[j])) {
        cacheObjects.push(secondInput[j]);
      }
    }

    for (let i = 0; i < this.length; i++) {
      this[i] = this[i].concat(i % 2 ? cacheObjects : cacheArrays);
    }

    return this;
  }

  removeInner(numberInput: number): number[] {
    
    const percentage = numberInput / 100;
    const elCount = Math.ceil(this.length * percentage);
    const evenElCount = 2 * Math.round(elCount / 2);
    const startIndex = Math.ceil((this.length - evenElCount) / 2);

    this.splice(startIndex, evenElCount);

    return this;
  }
}

const arrTest = [1, 2, 3];

// const extArr = new ExtendedArray(...arrTest);
// console.log(extArr.slice(1, extArr.length - 1));

const exArray = ExtendedArray.from(arrTest);
console.log(exArray.slice(1, exArray.length - 1));


// const extendedArray = new ExtendedArray(
//   [1, undefined, [1, 2, 3], "test", { name: "John Doe" }],
//   [
//     null,
//     () => {
//       console.log("Hello,  world!");
//     },
//     ["one", "five"],
//     undefined,
//     6,
//   ]
// );
// const test = extendedArray.concatTruthyElementsOfArray();

// console.log(JSON.stringify(extendedArray.concatTruthyElementsOfArray()));

// const extendedArray = new ExtendedArray([6, 4, 3, 1, 9, 44, 33, 2]);

// console.log(extendedArray.oddCounter());
// output
// 4

// bubbleSort
// input
// 6, 4, 3, 1, 9, 44, 33, 2
// output
// [1, 2, 3, 4, 6, 9, 33, 44]

// const extendedArray = new ExtendedArray([6, 4, 3, 1, 9, 44, 33, 2]);

// console.log(extendedArray.bubbleSort());

// calculateDataTypes
// InputEvent
// const extendedArray = new ExtendedArray([
//   6,
//   "Test",
//   "value",
//   1,
//   undefined,
//   null,
//   () => {
//     console.log("Hello,  world!");
//   },
//   { count: 5 },
// ]);
// console.log(extendedArray.calculateDataTypes());

// output
// {
//   nullCount: 1,
//   objectsCount: 2,
//   stringsCount: 2,
//   numericsCount: 2,
//   arraysCount: 0,
//   undefinedCount: 1,
//   datesCount: 0,
//   booleansCount: 0,
//   functions: 1
// }

// concatTruthyElementsOfArray

// const extendedArray = new ExtendedArray(
//   [1, undefined, [1, 2, 3], "test", {name: "John Doe"}],
// [null, () => {console.log("Hello,  world!")}, ["one", "five"], undefined, 6]
// );
// console.log(extendedArray.concatTruthyElementsOfArray());
// output
// [1, undefined, [1, 2, 3, () => {console.log("Hello,  world!")}, ["one", "five"], 6], "test", {name: "John Doe"}]

// const extendedArray = new ExtendedArray(
//   [
//     [1, 2, 3, 4],
//     ["one", "two"],
//     [5, 6],
//   ],
//   [
//     null,
//     () => {
//       console.log("Hello,  world!");
//     },
//     ["one", "five"],
//     { role: "admin" },
//     { name: "John" },
//     [1000, 1001],
//   ]
// );
// console.log(extendedArray.appender());
// output
// [[1,2,3,4,"one","five",1000,1001],["one","two",{"role":"admin"},{"name":"John"}],[5,6,"one","five",1000,1001]]

// const extendedArray = new ExtendedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 50);

// console.log(extendedArray.removeInner());

// output
// [1,2,9,10]
