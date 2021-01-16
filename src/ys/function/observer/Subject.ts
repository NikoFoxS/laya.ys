class Inner {/**单例使用 */ }

export interface IObserver {
    /**
     * 列出感兴趣的notification
     */
    listNotification(): any[];
    /**
     * 处理通知
     * @param name 通知的识别名字
     * @param data 数据
     */
    onNotification(name: any, data: any):void;
}

export class Subject {
    /**
     * 观察者列表
     * */
    public list: IObserver[] = [];

    constructor(inner: Inner) {
        if (!(inner instanceof Inner)) {
            throw new Error('cant new Subject');
        }
    }

    private static _instance: Subject;
    public static getInstance(): Subject {
        if (!Subject._instance) {
            Subject._instance = new Subject(new Inner);
        }
        return Subject._instance;
    }

    /**
     * 注册观察者
     * */
    public registerObserver(o: IObserver) {
        this.list.push(o);
    }

    /**
     * 移除观察者
     * */
    public removeObserver(o: IObserver) {
        var idx = this.list.indexOf(o);
        if (idx != -1) {
            this.list.splice(idx, 1);
        }
    }

    /**
     * 向所有观察者派发消息
     * */
    public sendNotification(name:any, data:any) {
        for (var i = 0; i < this.list.length; i++) {
            var o = this.list[i];
            if (o.listNotification().indexOf(name) != -1) {
                o.onNotification(name, data);
            }
        }
    }
}