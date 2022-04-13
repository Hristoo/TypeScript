import { numberToShortHex, numberToHex } from "./lib.js";
class Color {
    opacity = 1;
    hexString = "000";
    r = 0;
    g = 0;
    b = 0;
    constructor(...args) {
        if (typeof args[0] === "string") {
            this.hexString = args[0];
            this.opacity = args[1] || this.opacity;
            this.isValidHex(this.hexString);
        }
        if (args.length >= 3) {
            this.r = args[0];
            this.g = args[1];
            this.b = args[2];
            this.opacity = args[3] || this.opacity;
            this.isValidRgb(args);
        }
        this.isValidOpacity();
    }
    isValidRgb(args) {
        const isValidRgb = args.slice(0, 2).every((x) => x >= 0 && x <= 255);
        if (isValidRgb) {
            return true;
        }
        else {
            throw "RGB values are not valid!";
        }
    }
    isValidHex(hexString) {
        const pattern = new RegExp("^#([a-fA-F0-9]){3}$|[a-fA-F0-9]{6}$");
        const isValidHex = pattern.test(hexString);
        if (isValidHex) {
            return true;
        }
        else {
            throw "Hex values are not valid!";
        }
    }
    isValidOpacity() {
        const opacity = this.opacity;
        const isValidOpacity = opacity >= 0 && opacity <= 1;
        if (!isValidOpacity) {
            throw "Opacity value is not valid!";
        }
        return true;
    }
    getColorRGB() {
        let r = this.r;
        let g = this.g;
        let b = this.b;
        let opacity = this.opacity;
        if (this.hexString) {
            const hex = this.hexString;
            if (hex.length <= 4) {
                // r = `0x${hex[1] + hex[1]}`;
                // g = `0x${hex[2] + hex[2]}`;
                // b = `0x${hex[3] + hex[3]}`;
            }
            else if (hex.length >= 6) {
                r = parseInt(hex[1], 16) + parseInt(hex[2], 16);
                g = parseInt(hex[3], 16) + parseInt(hex[4], 16);
                
                b = parseInt(hex[5], 16) + parseInt(hex[6], 16);
            }
        }
        if (this.opacity) {
            return `rgba(${r}, ${g}, ${b}, ${this.opacity});`;
        }
        else {
            return `rgb(${r}, ${g}, ${b});`;
        }
    }
    getColorShortHex() {
        const hex = this.hexString;
        if (hex !== "000") {
            return `#${numberToShortHex(this.r)}${numberToShortHex(this.g)}${numberToShortHex(this.b)}`;
        }
        else {
            return `#${hex[1]}${hex[3]}${hex[5]}`;
        }
    }
    opacityToStr() {
        let opacity = Math.round(this.opacity * 255).toString(16);
        return opacity === "0" ? "0" + opacity : opacity;
    }
    getColorLongHex() {
        const hex = this.hexString;
        const opacityHexString = this.opacity !== undefined ? `${this.opacityToStr()}` : "";
        if (hex !== "000") {
            return `#${numberToHex(this.r)}${numberToHex(this.g)}${numberToHex(this.b)}${opacityHexString}`;
        }
        else if (hex.length > 4) {
            return hex + opacityHexString;
        }
        else {
            return `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}${opacityHexString}`;
        }
    }
}
const color = new Color("ffff00", 0.2); // ('FF0000', 1);  returns 'FF0000FF' - ('FF0000', 0.5);  returns 'FF000080'
console.log(color.getColorRGB());
