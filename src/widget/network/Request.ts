export class Request {

    private callback: any;
    private caller: any;
    private xhr: Laya.HttpRequest;

    constructor() {
        this.xhr = new Laya.HttpRequest;
    }

    public set timeout(val: number) {
        this.xhr.http.timeout = val;
    }

    public get(url: string, caller: any, callback: any): Request {
        this.caller = caller;
        this.callback = callback;
        this.initEvt();
        this.xhr.send(url, null, 'get', 'text');
        return this;
    }

    public post(url: string, data: any, caller: any, callback: any, contentType?: string): Request {
        this.caller = caller;
        this.callback = callback;
        this.initEvt();
        if (contentType == null) {
            this.xhr.send(url, data, 'post', 'text');
        } else {
            this.xhr.send(url, data, 'post', 'text', ["content-type", contentType]);
        }
        return this;
    }

    private removeEvt() {
        this.xhr.off(Laya.Event.COMPLETE, this, this.onHttpRequestComplete);
        this.xhr.off(Laya.Event.ERROR, this, this.onHttpRequestError);
    }

    private initEvt() {
        this.xhr.on(Laya.Event.COMPLETE, this, this.onHttpRequestComplete);
        this.xhr.on(Laya.Event.ERROR, this, this.onHttpRequestError);
    }

    private onHttpRequestError(e: any): void {
        this.callback.apply(this.caller, [{ state: 500, msg: e }]);
        this.removeEvt();
    }

    private onHttpRequestComplete(e: any): void {
        this.callback.apply(this.caller, [{ state: 200, data: this.xhr.data }]);
        this.removeEvt();
    }
}
