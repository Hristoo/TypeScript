const dataTypes1 = [
    {
      id: "numbers",
      typeOfValue: "number",
      weight: 4,
    },
    {
      id: "objects",
      typeOfValue: "object",
      weight: 10,
    },
    {
      id: "nulls",
      typeOfValue: "null",
      weight: 2,
    },
    {
      id: "undefined",
      typeOfValue: "undefined",
      weight: 2,
    },
    {
      id: "arrays",
      typeOfValue: "array",
      weight: 10,
    },
    {
      id: "strings",
      typeOfValue: "string",
      weight: 8,
    },
    {
      id: "booleans",
      typeOfValue: "boolean",
      weight: 4,
    },
    {
      id: "functions",
      typeOfValue: "function",
      weight: 10,
    },
  ];
  
  const arrInput = [
    6,
    "Test",
    "value",
    1,
    undefined,
    null,
    { name: "john.doe", role: "admim" },
  ];
  const weight = 26;
  
  function calcWeight(input: any[], typesValues: Types): number {
    let weight = 0;
    let checked: any[] = [];

    input.forEach((element) => {
      const typeOfElement = element != null ? typeof element : "null";
      if (typeOfElement == "object" && !checked.includes(element)) {
        checked.push(element);
        weight += calcWeight(element, typesValues);
      }
      weight += typesValues[typeOfElement];
    });
  
    return weight;
  }

  interface Types 
  {
    [key: string]: number;
  }

  const typesObj: Types = {
    string: 8,
    number: 4,
    boolean: 2
  }

  function findByWeight(arr: any[], weight: number): boolean {
    const typesValues: Types = {};
    const checked: unknown[] = [];
    let result = false;
    dataTypes1.forEach((x) => (typesValues[x.typeOfValue] = x.weight));
  
      for (let i = 0; i < arr.length; i++) {
        let elWeight = 0;
        const typeOfElement = arr[i] != null ? typeof arr[i] : "null";
        if (typeOfElement == "object" && !checked.includes(arr[i])) {
          checked.push(arr[i]);
          if (!Array.isArray(arr[i])) {
              arr[i] = Object.values(arr[i]);
            }
          elWeight += calcWeight(arr[i], typesValues);
        }
        elWeight += typesValues[typeOfElement];
        result = elWeight === weight;
        if (result) {
          break;
        }
      }
  
    return result;
  }
  
  console.log(findByWeight(arrInput, weight));
  