import { isObj } from "./lib";

const arr = [
  {
    person: {
      firstName: "John",
      lastName: "Doe",
      role: "Admin",
    },
    permissions: ["read", "write", "special"],
    age: 42,
    competencies: [
      { skill: "JavaScript", level: "junior" },
      { skill: "css", level: "junior" },
    ],
  },
  "sunny day",
  5,
];

function flatteningObj(obj: object, propName?: string): object {
  const checked: unknown[] = [];
  const flattenedObj = {};
  propName = propName ? propName + "_" : "";
  for (const key in obj) {
    if (
      isObj(obj[key]) ||
      (Array.isArray(obj[key]) && !checked.includes(obj[key]))
    ) {
      checked.push(obj[key]);
      Object.assign(flattenedObj, flatteningObj(obj[key], propName + key));
    } else {
      flattenedObj[propName + key] = obj[key];
    }
  }

  return flattenedObj;
}

function initFlattening(input: any[]) {
  for (let i = 0; i < input.length; i++) {
    if (isObj(input[i]) || Array.isArray(input[i])) {
      input[i] = flatteningObj(input[i]);
    }
  }

  return input;
}

console.log(initFlattening(arr));
