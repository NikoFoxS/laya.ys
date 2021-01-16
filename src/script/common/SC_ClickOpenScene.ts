/**
 * 点击打开场景
 */
export default class SC_ClickOpenScene extends Laya.Script {

    /** @prop {name:scene,type:string,tips:"加载view"} */
    scene: string;

    constructor() {
        super();
    }

    onClick(e: laya.events.Event): void {
        if(this.scene)
        {
            Laya.Scene.open(this.scene);
        }
    }
}