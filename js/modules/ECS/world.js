"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class World {
    Reset() {
        this.entityCount = 0;
    }
    Update() {
        //
    }
    newEntity() {
        return this.entityCount++;
    }
}
exports.World = World;
//# sourceMappingURL=world.js.map