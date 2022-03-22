function generatePyramid(input) {
    var output = '';
    for (var i = 1; i <= input; i++) {
        for (var j = 1; j <= i; j++) {
            output += j + '  ';
        }
        console.log(output);
        output = '';
    }
}
generatePyramid(5);
