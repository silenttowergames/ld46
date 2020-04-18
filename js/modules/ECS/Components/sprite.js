"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sprite {
    constructor() {
        this._animation = "";
        this.Duration = 0;
    }
    get Animation() {
        return this.Animations.get(this._animation);
    }
    ;
    SetAnim(key) {
        this.Duration = 0;
        this._animation = key;
    }
}
exports.Sprite = Sprite;
//# sourceMappingURL=sprite.js.map