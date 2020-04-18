import { Canvas } from "../modules/canvas";
import { v2d } from "../modules/v2d";
import { Color } from "../modules/color";

function init(){
	const canvas = new Canvas();
	canvas.ID = 'c';
	canvas.Skybox = new Color(0, 100, 0, 1);
	canvas.Resolution = new v2d(320, 180);
	canvas.Zoom = 1;
	
	canvas.Init();
	
	window.addEventListener('resize', () => canvas.Resize());
}

window.addEventListener('DOMContentLoaded', init);