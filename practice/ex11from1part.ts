type NumArgs = [number, number];
type StringArgs = [string, string];

function combine(...args: NumArgs | StringArgs): number | string {
  return args[0] + args[1];
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine("1", "Anna");
console.log(combinedNames);
