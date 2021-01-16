/**
 * 点击打开View
 * */
export default class SC_ClickOpenView extends Laya.Script {

    /** @prop {name:view,type:string,tips:"加载view"} */
    view: string;

    constructor() {
        super();
    }

    onClick(e: laya.events.Event): void {
        if(this.view)
        {
            Laya.View.open(this.view,false);
        }
    }
}