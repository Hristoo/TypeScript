const arr = [6, 4, 3, 1, 9, 44, 33, 2];
function bubbleSort(array) {
    let isDone = false;
    while (!isDone) {
        isDone = true;
        for (let i = 1; i < array.length; i += 1) {
            if (array[i - 1] > array[i]) {
                isDone = false;
                const tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
        }
    }
    return array;
}
console.log(bubbleSort(arr), "hd");
//# sourceMappingURL=Exam1_2.js.map