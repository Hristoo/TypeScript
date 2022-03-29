import { numberToShortHex, numberToHex, isNumber } from "./lib.js";
class Color {
  hexString: string;
  opacity: number;
  r: string | number;
  g: string | number;
  b: string | number;

  constructor(...args: any[]) {
    let isHexValue: boolean;

    if (isNumber(args[0])) {
      this.isValidRgb(args);
    } else {
      isHexValue = true;
      this.isValidHex(args[0]);
    }

    if (isHexValue) {
      this.hexString = args[0] || "#000000";
      this.opacity = args[1];
    } else {
      this.r = args[0] || 0;
      this.g = args[1] || 0;
      this.b = args[2] || 0;
      this.opacity = args[3];
    }
    this.isValidOpacity(this.opacity);
  }

  isValidRgb(args: any[]): boolean {
    const isValidRgb = args
      .slice(0, 2)
      .every((x) => isNumber(x) && x >= 0 && x <= 255);

    if (isValidRgb) {
      return true;
    } else {
      throw "RGB values are not valid!";
    }
  }

  isValidHex(hexString: string): boolean {
    const pattern = new RegExp("^#([a-fA-F0-9]){3}$|[a-fA-F0-9]{6}$");
    const isValidHex = pattern.test(hexString);

    if (isValidHex) {
      return true;
    } else {
      throw "Hex values are not valid!";
    }
  }

  isValidOpacity(opacity: number): boolean {
    const isValidOpacity =
      (isNumber(opacity) && opacity >= 0 && opacity <= 1) ||
      opacity === undefined;

    if (!isValidOpacity) {
      throw "Opacity value is not valid!";
    }
    return true;
  }

  getColorRGB(): string {
    let r = this.r;
    let g = this.g;
    let b = this.b;
    let opacity = this.opacity;

    if (this.hexString) {
      const hex = this.hexString;

      if (hex.length == 4) {
        r = `0x${hex[1] + hex[1]}`;
        g = `0x${hex[2] + hex[2]}`;
        b = `0x${hex[3] + hex[3]}`;
      } else if (hex.length == 7) {
        r = `0x${hex[1] + hex[2]}`;
        g = `0x${hex[3] + hex[4]}`;
        b = `0x${hex[5] + hex[6]}`;
      }
    }

    if (opacity) {
      return `rgba(${+r}, ${+g}, ${+b}, ${opacity});`;
    } else {
      return `rgb(${+r}, ${+g}, ${+b});`;
    }
  }

  getColorShortHex(): string {
    const hex = this.hexString;

    if (!hex && typeof this.r === "number"&& typeof this.g === "number"&& typeof this.b === "number") {
      return `#${numberToShortHex(this.r)}${numberToShortHex(
        this.g
      )}${numberToShortHex(this.b)}`;
    } else {
      return `#${hex[1]}${hex[3]}${hex[5]}`;
    }
  }

  opacityToStr(opacityInput: number): string {
    let opacity = Math.round(opacityInput * 255).toString(16);
    return opacity === "0" ? "0" + opacity : opacity;
  }
  getColorLongHex(): string {
    const hex = this.hexString;
    const opacityHexString =
      this.opacity !== undefined
        ? `${this.opacityToStr(this.opacity)}`
        : "";

    if (!hex && typeof this.r === "number"&& typeof this.g === "number"&& typeof this.b === "number") {
      return `#${numberToHex(this.r)}${numberToHex(this.g)}${numberToHex(
        this.b
      )}${opacityHexString}`;
    } else if (hex.length > 4) {
      return hex + opacityHexString;
    } else {
      return `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}${opacityHexString}`;
    }
  }
}

const color = new Color(255, 255, 255, "undefined"); // ('FF0000', 1);  returns 'FF0000FF' - ('FF0000', 0.5);  returns 'FF000080'

console.log(color.getColorRGB());
