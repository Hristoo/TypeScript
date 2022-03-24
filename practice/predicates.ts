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

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

const fish = new Fish();
const bird = new Bird();

console.log(isFish(fish));
