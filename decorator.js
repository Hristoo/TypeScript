var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logString) {
    return function (constructor) {
        console.log("Logging...");
    };
}
// function WithTemplate(template: string, hookId: string) {
//   return function (constructor: any) {
//     const hookEl = document.getElementById(hookId);
//     const p = new constructor();
//     if (hookEl) {
//       hookEl.innerHTML = template;
//       hookEl.querySelector("h1")!.textContent = p.name;
//     }
//   };
// }
// @WithTemplate("<h1>My Person Object</h1>", "app")
var Person = /** @class */ (function () {
    function Person() {
        this.name = "Ivan";
        console.log("Creating person object...");
    }
    Person = __decorate([
        Logger("Loging - person")
    ], Person);
    return Person;
}());
var person = new Person();
console.log(person);
// function Log(target: any, propertyName: string | Symbol) {
//   console.log("Property decorator");
//   console.log(target, propertyName);
// }
// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log("Accessor decorator");
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }
// function Log3(target: any, name: string| Symbol, descriptor: PropertyDescriptor){
//   console.log("Method decorator");
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }
// function Log4(target: any, name: string| Symbol,person: number){
//   console.log("Parameter decorator");
//   console.log(target);
//   console.log(name);
//   console.log(person);
// }
// class Product {
//   // @Log
//   title: string;
//   private _price: number;
//   // @Log2
//   set price(val: number) {
//     if (val > 0) {
//       this.price = val;
//     } else {
//       throw new Error("Invalid price - should be positive!");
//     }
//   }
//   constructor(t: string, p: number) {
//     this.title = t;
//     this._price = p;
//   }
//   // @Log3
//   getPriceWithTax( tax: number) {
//     return this.price * (1 + tax);
//   }
// }
