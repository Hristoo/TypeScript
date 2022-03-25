function Logger(logString: string) {
  return function (constructor: Function) {
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
@Logger("Loging - person")
class Person {
  name = "Ivan";

  constructor() {
    console.log("Creating person object...");
  }
}

const person = new Person();

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
