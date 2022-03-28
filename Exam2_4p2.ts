const inputArray = [1, 2, 3, 4, 5, 6, 7];
const divisible = 2;

function calculate(input: number[], divisible: number): number[] {
  return input.filter((x) => x % divisible == 0);
}

console.log(calculate(inputArray, divisible));
