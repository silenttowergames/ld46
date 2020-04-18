export class v2d {
	static Zero(){
		return new v2d(0, 0);
	}
	
	constructor(x: number, y: number) {
		this.X = x;
		this.Y = y;
	}
	
	X: number;
	Y: number;
}