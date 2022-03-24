function generatePyramid(input) {
    let output = "";
    for (let i = 1; i <= input; i++) {
        for (let j = 1; j <= i; j++) {
            output += j + "  ";
        }
        for (let j = i - 1; j > 0; j--) {
            output += j + "  ";
        }
        console.log(output);
        output = "";
    }
}
generatePyramid(5);
//# sourceMappingURL=Exam1_3p3.js.map