let testData = [6, 4, 3, 1, 9, 44, 33, 2];
const basicComparer = (left: number, right: number): boolean => {
  return left < right;
};

let bubbleSort15 = (
  input: number[],
  comparer: (a: number, b: number) => boolean
): number[] => {
  const len = input.length;
  let done = false;

  // comparer( // types
  for (let i = 0; i < len; i++) {
    if (done) {
      break;
    }
    done = true;
    for (let j = 0; j < len - 1; j++) {
      if (!comparer(input[j], input[j + 1])) {
        done = false;
        let tmp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = tmp;
      }
    }
  }

  return input;
};

// console.log(bubbleSort15(testData, basicComparer));

function swap(arr: number[], swappedIndex: number, swapperTndex: number): void {
  let temp = arr[swappedIndex];
  arr[swappedIndex] = arr[swapperTndex];
  arr[swapperTndex] = temp;
}

function minMaxSort(
  input: number[],
  comparer: (a: number, b: number) => boolean
): number[] {
  const n = input.length;

  for (let i = 0, j = n - 1; i < j; i++, j--) {
    let curMin = input[i];
    let curMax = input[i];
    let curMin_i = i;
    let curMax_i = i;

    for (let k = i; k <= j; k++) {
      if (comparer(input[k], curMin)) {
        curMin = input[k];
        curMin_i = k;
      } else if (!comparer(input[k], curMax)) {
        curMax = input[k];
        curMax_i = k;
      }
    }

    if (i === curMin_i || j === curMax_i) {
      break;
    }
    swap(input, i, curMin_i);
    swap(input, j, curMax_i);
  }

  return input;
}

console.log(minMaxSort(testData, basicComparer));
