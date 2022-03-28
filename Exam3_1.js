const dataTypes = [
    {
        id: "nulls",
        typeOfValue: "object",
        resultsProperty: "nullCount",
        testerFunction: (element) => {
            return element === null;
        },
    },
    {
        id: "objects",
        typeOfValue: "object",
        resultsProperty: "objectsCount",
        testerFunction: (element) => {
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
        testerFunction: (element) => {
            return Array.isArray(element);
        },
    },
    {
        id: "undefined",
        typeOfValue: "undefined",
        resultsProperty: "undefinedCount",
        testerFunction: (element) => {
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
    constructor(inputArr1, inputArr2) {
        super();
        this.firstInputArr = inputArr1;
        this.secondInputArr = inputArr2;
    }
    oddCounter() {
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
export {};
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
