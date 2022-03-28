class ExtendedArray extends Array {

    print(test: ExtendedArray){
        console.log("printing...")
    }
    odd = function oddCounter() {
      let counter = 0;
  
      this.forEach((element) => {
        if (element % 2 == 0) {
          counter++;
        }
      });
  
      return counter;
    }
}

const test2 = new ExtendedArray();

console.log( test2.odd(),test2.print(test2))


