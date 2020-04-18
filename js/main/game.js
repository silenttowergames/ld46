"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var canvas_1 = require("../modules/canvas");
var v2d_1 = require("../modules/v2d");
var color_1 = require("../modules/color");
function init() {
    var canvas = new canvas_1.Canvas();
    canvas.ID = 'c';
    canvas.Skybox = new color_1.Color(0, 100, 0, 1);
    canvas.Resolution = new v2d_1.v2d(320, 180);
    canvas.Zoom = 1;
    canvas.Init();
    window.addEventListener('resize', function () { return canvas.Resize(); });
}
window.addEventListener('DOMContentLoaded', init);
//# sourceMappingURL=game.js.map