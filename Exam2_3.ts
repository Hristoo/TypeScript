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

function appender(firstInput: unknown[], secondInput: unknown[]): unknown[] {
  for (let i = 0; i < firstInput.length; i++) {
    const curEl = firstInput[i];
    if (Array.isArray(curEl)) {
      curEl.concat(secondInput.filter(el => !!el));
    }
  }

  return firstInput;
}

console.log(appender(arrOne, arrTwo));