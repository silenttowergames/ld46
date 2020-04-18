export class World {
	private entityCount: number;
	
	Reset() : void {
		this.entityCount = 0;
	}
	
	Update() : void {
		//
	}
	
	newEntity() : number {
		return this.entityCount++;
	}
	
	components: Map<string, any>;
	systems: Array<any>;
}