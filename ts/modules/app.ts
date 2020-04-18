import { Canvas } from "./canvas";
import { v2d } from "./v2d";

export class App {
	canvas: Canvas;
	assets: Map<string, any>;
	
	private count: number = 0;
	
	Loop() : void {
		this.canvas.Predraw();
		
		const frame: v2d = { X: Math.floor((this.count += 0.1) % 2), Y: 0};
		
		this.canvas.d().drawImage(
			this.assets.get("texture"),
			frame.X * 16,
			frame.Y * 16,
			16,
			16,
			0,
			0,
			16 * this.canvas.Zoom,
			16 * this.canvas.Zoom
		);
	}
}