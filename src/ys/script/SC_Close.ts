/**
 * 关闭父容器
 */
export default class SC_CloseParent extends Laya.Script {
    constructor() {
        super();
    }

    onAwake(): void {

    }

    onClick(e: laya.events.Event): void {
        let p = this.owner;
        if(p.parent)
        {
            p.parent.removeSelf();
        }
    }
}