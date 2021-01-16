import { Subject,IObserver } from "./Subject";

export class Observer  implements IObserver
{
    constructor()
    {
        Subject.getInstance().registerObserver(this);
    }

    listNotification(): any[]
    {
        return [];
    }
    /**
     * 处理通知
     * @param name 通知的识别名字
     * @param data 数据
     */
    onNotification(name: any, data: any):void
    {

    }
}