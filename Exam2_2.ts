const person = { name: "John Doe" };
type PersonType = { name: string };

function findObj(data: any[], searchedObj: PersonType): boolean {
  return data.some((element) => element === searchedObj);
}

console.log(
  findObj(
    [
      6,
      "Test",
      "value",
      person,
      1,
      undefined,
      null,
      () => {
        console.log("Hello,  world!");
      },
      { count: 5 },
      { name: "John Doe" },
    ],
    person
  )
);
