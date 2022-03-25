function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Ivan" }, { age: 23 });
console.log(mergedObj);
function countAndPrint(element) {
    let description = "Got no value";
    if (element.length === 1) {
        description = "Got 1 value";
    }
    else if (element.length > 1) {
        description = `Got ${element.length} value`;
    }
    return [element, description];
}
console.log(countAndPrint(["first", "second"]));
function extractAndConvert(obj, key) {
    return `Value ${obj[key]}`;
}
extractAndConvert({ name: "Ivan" }, "name");
class DataStorage {
    data = [];
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Ivan");
textStorage.addItem("Dragan");
textStorage.removeItem("Ivan");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
//# sourceMappingURL=generics.js.map