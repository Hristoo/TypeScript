function generatePyramid(input) {
    let output = "";
    for (let i = 1; i <= input; i++) {
        for (let j = 1; j <= i; j++) {
            output += j + "  ";
        }
        console.log(output);
        output = "";
    }
    for (let i = input - 1; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            output += j + "  ";
        }
        console.log(output);
        output = "";
    }
}
generatePyramid(6);
//# sourceMappingURL=Exam1_3p2.js.map