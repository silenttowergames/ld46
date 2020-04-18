import { v2d } from "../v2d";

export class Frame {
	constructor(x: number, y: number, d: number){
		this.Position = new v2d(x, y);
		this.Duration = d;
	}
	
	Position: v2d;
	
	Duration: number;
}