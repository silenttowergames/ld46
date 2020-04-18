export class Color {
	constructor(r: Number, g: Number, b: Number, a: Number){
		this.Red = r;
		this.Green = g;
		this.Blue = b;
		this.Alpha = a;
	}
	
	rgba(){
		return `rgba(${this.Red}, ${this.Green}, ${this.Blue}, ${this.Alpha})`;
	}
	
	Red: Number;
	Green: Number;
	Blue: Number;
	Alpha: Number;
}