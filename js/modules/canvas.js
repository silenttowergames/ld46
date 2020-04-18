"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var v2d_1 = require("./v2d");
var Canvas = /** @class */ (function () {
    function Canvas() {
        this.Resolution = v2d_1.v2d.Zero();
    }
    Canvas.prototype.Init = function () {
        this.Resize();
        this.e().style.backgroundColor = this.Skybox.rgba();
        this.d().clearRect(0, 0, this.e().width, this.e().width);
    };
    Canvas.prototype.Resize = function () {
        this.Zoom = Math.min(window.innerWidth / this.Resolution.X, window.innerHeight / this.Resolution.Y);
        this.Zoom = Math.floor(this.Zoom);
        this.e().width = this.Resolution.X * this.Zoom;
        this.e().height = this.Resolution.Y * this.Zoom;
    };
    Canvas.prototype.d = function () {
        if (this.ctx == undefined) {
            this.ctx = this.e().getContext('2d');
        }
        return this.ctx;
    };
    Canvas.prototype.e = function () {
        return document.getElementById(this.ID);
    };
    return Canvas;
}());
exports.Canvas = Canvas;
//# sourceMappingURL=canvas.js.map