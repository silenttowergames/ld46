"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const v2d_1 = require("./v2d");
class Canvas {
    constructor() {
        this.Resolution = v2d_1.v2d.Zero();
    }
    Init() {
        this.Resize();
    }
    Resize() {
        this.Zoom = Math.min(window.innerWidth / this.Resolution.X, window.innerHeight / this.Resolution.Y);
        this.Zoom = Math.floor(this.Zoom);
        this.e().width = this.Resolution.X * this.Zoom;
        this.e().height = this.Resolution.Y * this.Zoom;
    }
    Predraw() {
        this.e().style.backgroundColor = this.Skybox.rgba();
        this.d().clearRect(0, 0, this.e().width, this.e().width);
        this.d().imageSmoothingEnabled = false;
    }
    d() {
        if (this.ctx == undefined) {
            this.ctx = this.e().getContext('2d');
        }
        return this.ctx;
    }
    e() {
        return document.getElementById(this.ID);
    }
}
exports.Canvas = Canvas;
//# sourceMappingURL=canvas.js.map