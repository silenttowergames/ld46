"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class App {
    constructor() {
        this.count = 0;
    }
    Loop() {
        this.canvas.Predraw();
        const frame = { X: Math.floor((this.count += 0.1) % 2), Y: 0 };
        this.canvas.d().drawImage(this.assets.get("texture"), frame.X * 16, frame.Y * 16, 16, 16, 0, 0, 16 * this.canvas.Zoom, 16 * this.canvas.Zoom);
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map