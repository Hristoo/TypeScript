export function isObj(value) {
    return typeof value === "object" && value != null && !Array.isArray(value);
}
export function isNumber(value) {
    return typeof value === "number";
}
export function getValueType(value) {
    return value != null ? typeof value : "null";
}
export function numberToShortHex(number) {
    const hex = number.toString(16);
    return hex.length > 1 ? hex[0] : hex;
}
export function numberToHex(number) {
    const hex = number.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
export function compareArrays(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }
    else {
        let result = false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] != arr2[i]) {
                return false;
            }
            else {
                result = true;
            }
        }
        return result;
    }
}
