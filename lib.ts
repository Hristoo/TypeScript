// export function isObj(value: unknown): boolean {
//     return typeof value === "object" && value != null && !Array.isArray(value);
//   }

export function isObj(value: unknown): value is object {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function isNumber(value: unknown): boolean {
  return typeof value === "number";
}

export function getValueType(value: unknown): string {
  return value != null ? typeof value : "null";
}

export function numberToShortHex(number: number): string {
  const hex = number.toString(16);
  return hex.length > 1 ? hex[0] : hex;
}

export function numberToHex(number: number): string {
  const hex = number.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

export function compareArrays(arr1: any[], arr2: any[]): boolean {
  if (arr1.length != arr2.length) {
    return false;
  } else {
    let result = false;

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        return false;
      } else {
        result = true;
      }
    }
    return result;
  }
}
