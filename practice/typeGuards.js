function checkType(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInfo(emp) {
    console.log(emp.name);
    if ("privileges" in emp) {
        console.log(emp.privileges);
    }
    if ("startDate" in emp) {
        console.log(emp.startDate);
    }
}
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadingCargo(amount) {
        console.log(`Driving...${amount}`);
    }
}
const vehicle1 = new Car();
const vehicle2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadingCargo(1000);
    }
}
useVehicle(vehicle1);
useVehicle(vehicle2);
//# sourceMappingURL=typeGuards.js.map