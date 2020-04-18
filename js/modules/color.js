"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Color = /** @class */ (function () {
    function Color(r, g, b, a) {
        this.Red = r;
        this.Green = g;
        this.Blue = b;
        this.Alpha = a;
    }
    Color.prototype.rgba = function () {
        return "rgba(" + this.Red + ", " + this.Green + ", " + this.Blue + ", " + this.Alpha + ")";
    };
    return Color;
}());
exports.Color = Color;
//# sourceMappingURL=color.js.map