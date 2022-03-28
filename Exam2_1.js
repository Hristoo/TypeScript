var testData = [6, 4, 3, 1, 9, 44, 33, 2];
var basicComparer = function (left, right) {
    return left < right;
};
var bubbleSort15 = function (input, comparer) {
    var len = input.length;
    var done = false;
    for (var i = 0; i < len; i++) {
        if (done) {
            break;
        }
        done = true;
        for (var j = 0; j < len - 1; j++) {
            if (!comparer(input[j], input[j + 1])) {
                done = false;
                var tmp = input[j];
                input[j] = input[j + 1];
                input[j + 1] = tmp;
            }
        }
    }
    return input;
};
// console.log(bubbleSort15(testData, basicComparer));
function swap(arr, xp, yp) {
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}
function minMaxSort(input, comparer) {
    var n = input.length;
    for (var i = 0, j = n - 1; i < j; i++, j--) {
        var curMin = input[i];
        var curMax = input[i];
        var curMin_i = i;
        var curMax_i = i;
        for (var k = i; k <= j; k++) {
            if (comparer(input[k], curMin)) {
                curMin = input[k];
                curMin_i = k;
            }
            else if (!comparer(input[k], curMax)) {
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
// chech if arr is ordered
