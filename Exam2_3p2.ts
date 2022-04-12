import { isObj } from "./lib";

const arr1 = [
  [1, 2, 3, 4],
  ["one", "two"],
  [5, 6],
];

const arr2 = [
  null,
  () => {
    console.log("Hello,  world!");
  },
  ["one", "five"],
  { role: "admin" },
  { name: "John" },
  [1000, 1001],
];

//todo memoization for optimizing
function appender(firstInput: unknown[], secondInput: unknown[]): unknown[] {
  let cacheArrays: unknown[] = [];
  let cacheObjects: object[] = [];

  for (let j = 0; j < secondInput.length; j++) {
    const secInputEl = secondInput[j]
    if (Array.isArray(secondInput[j])) {
      cacheArrays = cacheArrays.concat(secondInput[j]);
    } else if (isObj(secInputEl)) {
      cacheObjects.push(secInputEl);
    }
  }

  for (let i = 0; i < firstInput.length; i++) {
    let curEl = firstInput[i];
    if (Array.isArray(curEl)) {
      curEl = curEl.concat(i % 2 ? cacheObjects : cacheArrays);
    }
  }

  return firstInput;
}

console.log(appender(arr1, arr2));

// [
//   [1, 2, 3, 4, "one", "five", 1000, 1001],
//   ["one", "two", { role: "admin" }, { name: "John" }],
//   [5, 6, "one", "five", 1000, 1001],
// ];
