function findTheLongestWord(input, startChar) {
    var words = input.replace(/[^a-zA-Z ]/g, "").split(" ");
    var longest = "";
    words = words.filter(function (word) { return word[0].toLowerCase() === startChar.toLowerCase(); });
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}
console.log(findTheLongestWord("What we do in life echoes to eternity!", "W"));
function combine() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (typeof args[0] === "number" && typeof args[1] === "number") {
        return args[0] + args[1];
    }
    return args[0].toString() + args[1];
}
var combinedAges = combine(30, 26);
console.log(combinedAges);
var combinedNames = combine("1", "Anna");
console.log(combinedNames);
