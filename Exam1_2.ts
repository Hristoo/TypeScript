const arr :number[]= [6, 4, 3, 1, 9, 44, 33, 2];
function bubbleSort(array: number[]) : number[]{   
    let done = false;
    let counter = 0;
    while (!done) {
        done = true;
        for (let i = 1; i < array.length; i += 1) {
            counter++;
            if (array[i - 1] > array[i]) {
                done = false;
                let tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
        }
    }
    return array;
}


console.log(bubbleSort(arr),"hd");