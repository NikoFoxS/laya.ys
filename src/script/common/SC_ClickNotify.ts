import { Subject } from "../../widget/observer/Subject";
/**
 * 点击发送通知给观察者
 */
export default class SC_ClickNotify extends Laya.Script {

    /** @prop {name:name,type:string,tips:"点击派发事件名"} */
    name: string;

    /** @prop {name:data,type:any,tips:"点击派发事件的数据"} */
    data: any;

    constructor() {
        super();
    }

    onClick(e: laya.events.Event): void {
        if (this.name) {
            Subject.getInstance().sendNotification(this.name, this.data);
        }
    }
}