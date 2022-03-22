const arr = [6, 4, 3, 1, 9, 44, 33, 2];
let counter = 0;

function findOdd(arr: number[]): number {
  console.log(
    arr.forEach((element) => {
      if (element % 2 === 0) {
        counter++;
      }
    })
  );
  return counter;
}

console.log(findOdd(arr));
