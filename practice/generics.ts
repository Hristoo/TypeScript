function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Ivan" }, { age: 23 });
console.log(mergedObj);

interface Lengthy {
  length: number;
}
function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let description = "Got no value";
  if (element.length === 1) {
    description = "Got 1 value";
  } else if (element.length > 1) {
    description = `Got ${element.length} value`;
  }
  return [element, description];
}
console.log(countAndPrint(["first", "second"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value ${obj[key]}`;
}

extractAndConvert({ name: "Ivan" }, "name");

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Ivan");
textStorage.addItem("Dragan");
textStorage.removeItem("Ivan");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

