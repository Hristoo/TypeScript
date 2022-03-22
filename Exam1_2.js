var arr = [6, 4, 3, 1, 9, 44, 33, 2];
function bubbleSort(array) {
    var done = false;
    var counter = 0;
    while (!done) {
        done = true;
        for (var i = 1; i < array.length; i += 1) {
            counter++;
            if (array[i - 1] > array[i]) {
                done = false;
                var tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
        }
    }
    return array;
}
console.log(bubbleSort(arr), "hd");
