import { Canvas } from "../modules/canvas";
import { v2d } from "../modules/v2d";
import { Color } from "../modules/color";
import { App } from "../modules/app";

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
	
	// Start game
	window.addEventListener('load', () => {
		setInterval(() => {
			game.Loop();
		}, 1000 / 60);
	});
}

window.addEventListener('DOMContentLoaded', init);
