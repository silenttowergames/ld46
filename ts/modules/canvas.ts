import { v2d } from "./v2d";
import { Color } from "./color";

export class Canvas {
	constructor(){
		this.Resolution = v2d.Zero();
	}
	
	Init() : void {
		this.Resize();
	}
	
	Resize() : void {
		this.Zoom = Math.min(
			window.innerWidth / this.Resolution.X,
			window.innerHeight / this.Resolution.Y
		);
		
		this.Zoom = Math.floor(this.Zoom);
		
		this.e().width = this.Resolution.X * this.Zoom;
		this.e().height = this.Resolution.Y * this.Zoom;
	}
	
	Predraw() : void {
		this.e().style.backgroundColor = this.Skybox.rgba();
		
		this.d().clearRect(
			0,
			0,
			this.e().width,
			this.e().width
		);
		
		this.d().imageSmoothingEnabled = false;
	}
	
	d() : CanvasRenderingContext2D {
		if(this.ctx == undefined){
			this.ctx = this.e().getContext('2d');
		}
		
		return this.ctx;
	}
	
	e() : HTMLCanvasElement {
		return <HTMLCanvasElement>document.getElementById(this.ID);
	}
	
	private ctx: CanvasRenderingContext2D;
	
	ID: string;
	Skybox: Color;
	Resolution: v2d;
	Zoom: number;
}