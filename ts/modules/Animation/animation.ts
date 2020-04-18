import { Frame } from "./frame";

export class Animation {
	get Frame() : Frame {
		return this.Frames[this.FrameID];
	}
	
	FrameID: number;
	
	Frames: Array<Frame>;
}