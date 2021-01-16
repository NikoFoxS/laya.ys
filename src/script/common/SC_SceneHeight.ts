/**
 * 固定宽的情况下，让然后的高和stage的高一样。是bottom布局相对于stage的高。
 */
export default class SC_SceneHeight extends Laya.Script {
    constructor() {
        super();
    }

    onAwake(): void {
        this.resize();
        Laya.stage.on(Laya.Event.RESIZE, this, this.resize);
    }

    onDisable(): void {
        Laya.stage.off(Laya.Event.RESIZE, this, this.resize);
    }

    private resize(): void {
        let scene = this.owner as Laya.Scene;
        if (scene) {
            scene.height = Laya.stage.height;
        }
    }
}