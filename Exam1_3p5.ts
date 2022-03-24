
function generatePyramid(input: number) : void{
    let output = '';
    let k = 1;
    for (let i = 1; i <= input; i++) {
        k=i;
        for (let j = 1; j <= i; j++) {            
            output += k + '  ';
            k = k + input - j;
        }
        console.log(output);
        output = '';
    }
}

generatePyramid(5);

