"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canvas_1 = require("../modules/canvas");
const v2d_1 = require("../modules/v2d");
const color_1 = require("../modules/color");
const app_1 = require("../modules/app");
const sprite_1 = require("../modules/ECS/Components/sprite");
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
    const spr = new sprite_1.Sprite();
    spr.Animations = new Map();
    spr.Animations.set("idle", {
        Frame: null,
        FrameID: 0,
        Frames: [
            { Duration: 5, Position: { X: 0, Y: 0 }, },
            { Duration: 5, Position: { X: 1, Y: 0 }, },
        ],
    });
    spr.Asset = game.assets.get("texture");
    spr.SetAnim("idle");
    // Start game
    window.addEventListener('load', () => {
        setInterval(() => {
            game.Loop();
            const frame = { X: 0, Y: 0 };
            game.canvas.d().drawImage(spr.Asset, frame.X * 16, frame.Y * 16, 16, 16, 0, 0, 16 * game.canvas.Zoom, 16 * game.canvas.Zoom);
        }, 1000 / 60);
    });
}
window.addEventListener('DOMContentLoaded', init);
//# sourceMappingURL=game.js.map