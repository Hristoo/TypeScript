import { isObj, compareArrays } from "./lib.js";

const dataTypes = [
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
  firstInputArr: number[];
  secondInputArr: number[];

  constructor(inputArr1: number[], inputArr2?: number[]) {
    super();
    this.firstInputArr = inputArr1;
    this.secondInputArr = inputArr2;
  }
  oddCounter(): number {
    
    let counter = 0;

    this[0].forEach((element) => {
      if (element % 2 == 0) {
        counter++;
      }
    });

    return counter;
  }



  bubbleSort() {
    let isDone = false;
    let sortedArray = this.firstInputArr;

    while (!isDone) {
      isDone = true;
      for (let i = 1; i < sortedArray.length; i += 1) {
        if (sortedArray[i - 1] > sortedArray[i]) {
          isDone = false;
          let tmp = sortedArray[i - 1];
          sortedArray[i - 1] = sortedArray[i];
          sortedArray[i] = tmp;
        }
      }
    }

    return sortedArray;
  }

  // calculateDataTypes() {
  //   const result = {};
  //   dataTypes.forEach((x) => (result[x.resultsProperty] = 0));

  //   this[0].forEach((element) => {
  //     const typeOfElement = typeof element;

  //     const types = dataTypes.filter((x) => x.typeOfValue === typeOfElement);
  //     for (let i = 0; i < types.length; i++) {
  //       if (!types[i].testerFunction) {
  //         result[types[i].resultsProperty]++;
  //         break;
  //       } else if (types[i].testerFunction(element)) {
  //         result[types[i].resultsProperty]++;
  //         break;
  //       }
  //     }
  //   });

  //   return result;
  // }
  // is not related to this class
  // flatteningObj(obj: object, propName: string) {
  //   const checked: object[] = [];
  //   const flattenedObj = {};
  //   propName = propName ? propName + "_" : "";
  //   for (const key in obj) {
  //     if (
  //       isObj(obj[key]) ||
  //       (Array.isArray(obj[key]) && !checked.includes(obj[key]))
  //     ) {
  //       checked.push(obj[key]);
  //       Object.assign(
  //         flattenedObj,
  //         extendedArray.flatteningObj(obj[key], propName + key)
  //       );
  //     } else {
  //       flattenedObj[propName + key] = obj[key];
  //     }
  //   }

  //   return flattenedObj;
  // }

  // initFlattening() {
  //   for (let i = 0; i < this.length; i++) {
  //     if (isObj(this[i]) || Array.isArray(this[i])) {
  //       this[i] = extendedArray.flatteningObj(this[i]);
  //     }
  //   }

  //   return JSON.stringify(this, null, 1);
  // }
  // compareObjects(sourceObj: object, searchedObj: object): boolean {
  //   const searchedObjKeys = Object.keys(searchedObj);
  //   const sourceObjKeys = Object.keys(sourceObj);
  //   let result = false;
  //   let checked = [];

  //   for (const key of searchedObjKeys) {
  //     if (sourceObjKeys.includes(key)) {
  //       const isChecked = checked.includes(sourceObj[key]);
  //       if (typeof sourceObj[key] !== typeof searchedObj[key] || isChecked) {
  //         result = false;
  //         break;
  //       } else if (sourceObj[key] === searchedObj[key]) {
  //         result = true;
  //         break;
  //       } else if (Array.isArray(sourceObj[key])) {
  //         result = compareArrays(sourceObj[key], searchedObj[key]);
  //         if (!result) {
  //           break;
  //         }
  //       } else if (isObj(sourceObj[key])) {
  //         checked.push(sourceObj[key]);
  //         result = this.compareObjects(sourceObj[key], searchedObj[key]); // result = compareObjects(sourceObj[key], searchedObj[key]); which is correct
  //       } else {
  //         result = false;
  //         break;
  //       }
  //     }
  //   }

  //   return result;
  // }

  // findObj() {
  //   const data = this[0];
  //   const searchObj = this[1];
  //   if (!Array.isArray(data)) {
  //     throw "Must pass an array variable!@";
  //   }
  //   const len = data.length;
  //   let checked = [];
  //   let result = false;
  //   if (data.some((x) => x === searchObj)) {
  //     result = true;
  //   } else {
  //     for (let i = 0; i < len; i++) {
  //       const isChecked = checked.includes(data[i]);
  //       if (isChecked) {
  //         break;
  //       }
  //       if (Array.isArray(data[i])) {
  //         checked.push(data[i]);
  //         result = findObj(data[i], searchObj);
  //       } else if (isObj(data[i])) {
  //         checked.push(data[i]);
  //         result = this.compareObjects(data[i], searchObj);
  //       }

  //       if (result) {
  //         break;
  //       }
  //     }
  //   }

  //   return result;
  // }
  // concatTruthyElementsOfArray() {
  //   let firstInput = this[0];
  //   const secondInput = this[1];
  //   const truthyElements = secondInput.filter((el) => !!el);

  //   for (let i = 0; i < firstInput.length; i++) {
  //     if (Array.isArray(firstInput[i])) {
  //       firstInput[i] = firstInput[i].concat(truthyElements);
  //     }
  //   }

  //   return firstInput;
  // }

//   appender() {
//     let firstInput = this[0];
//     const secondInput = this[1];
//     let cacheArrays: any[] = [];
//     let cacheObjects = [];

//     for (let j = 0; j < secondInput.length; j++) {
//       if (Array.isArray(secondInput[j])) {
//         cacheArrays = cacheArrays.concat(secondInput[j]);
//       } else if (isObj(secondInput[j])) {
//         cacheObjects.push(secondInput[j]);
//       }
//     }

//     for (let i = 0; i < firstInput.length; i++) {
//       firstInput[i] = firstInput[i].concat(i % 2 ? cacheObjects : cacheArrays);
//     }

//     return firstInput;
//   }

//   removeInner(): number[] {
//     let arr = this[0];
//     const num = this[1];
//     const percentage = num / 100;
//     const elCount = Math.ceil(arr.length * percentage);
//     const evenElCount = 2 * Math.round(elCount / 2);
//     const startIndex = Math.ceil((arr.length - evenElCount) / 2);

//     arr.splice(startIndex, evenElCount);
//     return arr;
//   }
}

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

const extendedArray = new ExtendedArray([6, 4, 3, 1, 9, 44, 33, 2]);

console.log(extendedArray.bubbleSort());

// calculateDataTypes
// InputEvent[6, "Test", "value", 1, undefined, null,  () => {console.log("Hello,  world!")}, {count: 5}]
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
// input
// [1, undefined, [1, 2, 3], "test", {name: "John Doe"}]
// [null, () => {console.log("Hello,  world!")}, ["one", "five"], undefined, 6]
// output
// [1, undefined, [1, 2, 3, () => {console.log("Hello,  world!")}, ["one", "five"], 6], "test", {name: "John Doe"}]

// appender
// input
// [[1, 2, 3, 4], ["one", "two"], [5, 6]] ,
// [null, () => {console.log("Hello,  world!")}, ["one", "five"], {role: "admin"}, {name: "John"}, [1000, 1001]]
// output
// [[1,2,3,4,"one","five",1000,1001],["one","two",{"role":"admin"},{"name":"John"}],[5,6,"one","five",1000,1001]]

// removeInner
// input
// [1,2,3,4,5,6,7,8,9,10]
// 50
// output
// [1,2,9,10]
