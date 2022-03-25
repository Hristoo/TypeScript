class Fish {
    swim() {
        console.log("Swimming...");
    }
}
class Bird {
    fly() {
        console.log("Flying...");
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
const fish = new Fish();
const bird = new Bird();
console.log(isFish(fish));
//# sourceMappingURL=predicates.js.map