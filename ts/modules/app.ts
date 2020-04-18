import { Canvas } from "./canvas";
import { v2d } from "./v2d";

export class App {
	canvas: Canvas;
	assets: Map<string, any>;
	
	private count: number = 0;
	
	Loop() : void {
		this.canvas.Predraw();
	}
}