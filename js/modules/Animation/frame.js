"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const v2d_1 = require("../v2d");
class Frame {
    constructor(x, y, d) {
        this.Position = new v2d_1.v2d(x, y);
        this.Duration = d;
    }
}
exports.Frame = Frame;
//# sourceMappingURL=frame.js.map