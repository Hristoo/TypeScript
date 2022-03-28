const arrOne = [1, undefined, [1, 2, 3], "test", { name: "John Doe" }];

const arrTwo = [
  null,
  () => {
    console.log("Hello,  world!");
  },
  ["one", "five"],
  undefined,
  6,
];

function appender(firstInput: any[], secondInput: unknown[]): unknown[] {
  for (let i = 0; i < firstInput.length; i++) {
    if (Array.isArray(firstInput[i])) {
      firstInput[i].concat(secondInput.filter(el => !!el));
    }
  }

  return firstInput;
}

console.log(appender(arrOne, arrTwo));