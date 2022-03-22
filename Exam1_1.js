var arr = [6, 4, 3, 1, 9, 44, 33, 2];
var counter = 0;
function findOdd(arr) {
    console.log(arr.forEach(function (element) {
        if (element % 2 === 0) {
            counter++;
        }
    }));
    return counter;
}
console.log(findOdd(arr));
