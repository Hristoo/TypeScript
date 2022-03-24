const arr = [6, 4, 3, 1, 9, 44, 33, 2];
let counter = 0;
function findOdd(arr) {
    console.log(arr.forEach((element) => {
        if (element % 2 === 0) {
            counter++;
        }
    }));
    return counter;
}
console.log(findOdd(arr));
var rest;
(function (rest) {
    rest["get"] = "Get";
    rest["post"] = "Post";
    rest["put"] = "Put";
    rest["delete"] = "Delete";
})(rest || (rest = {}));
const obj = {
    name: "Ico",
};
function test(obj) {
    console.log(obj.name);
}
//# sourceMappingURL=Exam1_1.js.map