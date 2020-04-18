import { Animation } from "../../Animation/animation";

export class Sprite {
	private _animation: string = "";
	get Animation() {
		return this.Animations.get(this._animation);
	};
	
	SetAnim(key: string) {
		this.Duration = 0;
		this._animation = key;
	}
	
	Duration: number = 0;
	
	Animations: Map<string, Animation>;
	
	Asset: HTMLImageElement;
}