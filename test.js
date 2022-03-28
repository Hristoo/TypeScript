class ExtendedArray extends Array {
    constructor() {
        super(...arguments);
        this.odd = function oddCounter() {
            let counter = 0;
            this.forEach((element) => {
                if (element % 2 == 0) {
                    counter++;
                }
            });
            return counter;
        };
    }
    print(test) {
        console.log("printing...");
    }
}
const test2 = new ExtendedArray();
console.log(test2.odd(), test2.print(test2));
