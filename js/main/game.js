"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canvas_1 = require("../modules/canvas");
const v2d_1 = require("../modules/v2d");
const color_1 = require("../modules/color");
const app_1 = require("../modules/app");
function init() {
    const game = new app_1.App();
    // Canvas
    game.canvas = new canvas_1.Canvas();
    game.canvas.ID = 'c';
    game.canvas.Skybox = new color_1.Color(0, 0, 0, 1);
    game.canvas.Resolution = new v2d_1.v2d(320, 180);
    game.canvas.Zoom = 1;
    game.canvas.Init();
    window.addEventListener('resize', () => game.canvas.Resize());
    // Assets
    game.assets = new Map();
    game.assets.set("texture", document.getElementById('texture'));
    // Start game
    window.addEventListener('load', () => {
        setInterval(() => {
            game.Loop();
        }, 1000 / 60);
    });
}
window.addEventListener('DOMContentLoaded', init);
//# sourceMappingURL=game.js.map