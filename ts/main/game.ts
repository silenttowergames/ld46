import { Canvas } from "../modules/canvas";
import { v2d } from "../modules/v2d";
import { Color } from "../modules/color";
import { App } from "../modules/app";
import { Sprite } from "../modules/ECS/Components/sprite";
import { Animation } from "../modules/Animation/animation";
import { Frame } from "../modules/Animation/frame";

function init(){
	const game: App = new App();
	
	// Canvas
	game.canvas = new Canvas();
	game.canvas.ID = 'c';
	game.canvas.Skybox = new Color(0, 0, 0, 1);
	game.canvas.Resolution = new v2d(320, 180);
	game.canvas.Zoom = 1;
	game.canvas.Init();
	window.addEventListener('resize', () => game.canvas.Resize());
	
	// Assets
	game.assets = new Map();
	game.assets.set("texture", document.getElementById('texture'));
	
	const spr = new Sprite();
	spr.Animations = new Map<string, Animation>();
	spr.Animations.set("idle", {
		Frame: null,
		FrameID: 0,
		Frames: [
			{ Duration: 5, Position:{X: 0, Y: 0}, },
			{ Duration: 5, Position:{X: 1, Y: 0}, },
		],
	});
	spr.Asset = game.assets.get("texture");
	spr.SetAnim("idle");
	
	// Start game
	window.addEventListener('load', () => {
		setInterval(() => {
			game.Loop();
			
			const frame: v2d = { X: 0, Y: 0};
			
			game.canvas.d().drawImage(
				spr.Asset,
				frame.X * 16,
				frame.Y * 16,
				16,
				16,
				0,
				0,
				16 * game.canvas.Zoom,
				16 * game.canvas.Zoom
			);
		}, 1000 / 60);
	});
}

window.addEventListener('DOMContentLoaded', init);
