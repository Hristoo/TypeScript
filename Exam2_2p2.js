"use strict";
exports.__esModule = true;
var lib_js_1 = require("lib.js");
var person = { name: "John Doe" };
var checked;
function findObj(data, searchObj) {
    if (!Array.isArray(data)) {
        throw "Must pass an array variable!@";
    }
    // todo circular reference
    var len = data.length;
    var result = false;
    for (var i = 0; i < len; i++) {
        var isChecked = !checked.includes(data[i]);
        if (data[i] === searchObj) {
            return true;
        }
        else if (Array.isArray(data[i]) && isChecked) {
            checked.push(data[i]);
            result = findObj(data[i], searchObj);
        }
        else if ((0, lib_js_1.isObj)(data[i]) && isChecked) {
            checked.push(data[i]);
            result = findObj(Object.values(data[i]), searchObj);
        }
        if (result) {
            return result;
        }
    }
    return result;
}
var person1 = { name: "John Doe" };
var person2 = { name: "Jane Doe", cosin: person1 };
// person1.cosin = person2;
console.log(findObj([
    6,
    "Test",
    "value",
    1,
    undefined,
    null,
    person1,
    function () {
        console.log("Hello,  world!");
    },
    { count: 5 },
    { name: "John Doe", test: { test: { person: person, test: "test" } } },
], person));
