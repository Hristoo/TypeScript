import { numberToShortHex, numberToHex, isNumber } from "./lib";
class Color {
  opacity: number = 1;
  hexString: string = "000";
  r: number = 0;
  g: number = 0;
  b: number = 0;

  constructor();
  constructor(hexString: string, opacity?: number);
  constructor(r: number, g: number, b: number, opacity?: number);
  constructor(...args: any[]) {
    if (typeof args[0] === "string") {
      this.hexString = args[0];
      this.opacity = args[1];
    }

    this.isValidHex(this.hexString);

    if (args.length >= 3) {
      this.r = args[0];
      this.g = args[1];
      this.b = args[2];
      this.opacity = args[3];
    }

    this.isValidRgb(args);
    this.isValidOpacity();
  }

  isValidRgb(args: number[]): boolean {
    const isValidRgb = args.slice(0, 2).every((x) => x >= 0 && x <= 255);

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

  isValidOpacity(): boolean {
    const opacity = this.opacity;
    const isValidOpacity = opacity >= 0 && opacity <= 1;

    if (!isValidOpacity) {
      throw "Opacity value is not valid!";
    }
    return true;
  }

  getColorRGB(): string {
    let rHex = "";
    let gHex = "";
    let bHex = "";
    if (this.hexString) {
      const hex = this.hexString;

      if (hex.length == 4) {
        rHex = `0x${hex[1] + hex[1]}`;
        gHex = `0x${hex[2] + hex[2]}`;
        bHex = `0x${hex[3] + hex[3]}`;
      } else if (hex.length == 7) {
        rHex = `0x${hex[1] + hex[2]}`;
        gHex = `0x${hex[3] + hex[4]}`;
        bHex = `0x${hex[5] + hex[6]}`;
      }
    }

    if (this.opacity) {
      return `rgba(${rHex}, ${gHex}, ${bHex}, ${this.opacity});`;
    } else {
      return `rgb(${rHex}, ${gHex}, ${bHex});`;
    }
  }

  getColorShortHex(): string {
    const hex = this.hexString;

    if (hex !== "000") {
      return `#${numberToShortHex(this.r)}${numberToShortHex(
        this.g
      )}${numberToShortHex(this.b)}`;
    } else {
      return `#${hex[1]}${hex[3]}${hex[5]}`;
    }
  }

  opacityToStr(): string {
    let opacity = Math.round(this.opacity * 255).toString(16);
    return opacity === "0" ? "0" + opacity : opacity;
  }
  getColorLongHex(): string {
    const hex = this.hexString;
    const opacityHexString =
      this.opacity !== undefined ? `${this.opacityToStr()}` : "";

    if (hex !== "000") {
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

const color = new Color("ffffff", 1); // ('FF0000', 1);  returns 'FF0000FF' - ('FF0000', 0.5);  returns 'FF000080'

color.getColorRGB();
console.log(color.getColorRGB());
