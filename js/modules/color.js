"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Color {
    constructor(r, g, b, a) {
        this.Red = r;
        this.Green = g;
        this.Blue = b;
        this.Alpha = a;
    }
    rgba() {
        return `rgba(${this.Red}, ${this.Green}, ${this.Blue}, ${this.Alpha})`;
    }
}
exports.Color = Color;
//# sourceMappingURL=color.js.map