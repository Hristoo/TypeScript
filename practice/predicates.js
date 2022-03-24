var Fish = /** @class */ (function () {
    function Fish() {
    }
    Fish.prototype.swim = function () {
        console.log("Swimming...");
    };
    return Fish;
}());
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log("Flying...");
    };
    return Bird;
}());
function isFish(pet) {
    return pet.swim !== undefined;
}
var fish = new Fish();
var bird = new Bird();
console.log(isFish(fish));
