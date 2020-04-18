export class Color {
	constructor(r: number, g: number, b: number, a: number){
		this.Red = r;
		this.Green = g;
		this.Blue = b;
		this.Alpha = a;
	}
	
	rgba(){
		return `rgba(${this.Red}, ${this.Green}, ${this.Blue}, ${this.Alpha})`;
	}
	
	Red: number;
	Green: number;
	Blue: number;
	Alpha: number;
}