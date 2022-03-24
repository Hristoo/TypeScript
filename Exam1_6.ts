function findTheLongestWord(input: string, startChar: string): string {
  let words = input.replace(/[^a-zA-Z ]/g, "").split(" ");
  let longest = "";

  words = words.filter(
    (word) => word[0].toLowerCase() === startChar.toLowerCase()
  );

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  return longest;
}

console.log(findTheLongestWord("What we do in life echoes to eternity!", "W"));

// type NumArgs = [number, number];
// type StringArgs = [string, string];

// function combine(...args: NumArgs | StringArgs): number | string {
//   if (typeof args[0] === "number" && typeof args[1] === "number") {
//     return args[0] + args[1];
//   }
//   return args[0].toString() + args[1];
// }

// const combinedAges = combine(30, 26);
// console.log(combinedAges);

// const combinedNames = combine("1", "Anna");
// console.log(combinedNames);

