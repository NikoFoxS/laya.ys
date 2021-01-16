export class Ajax {
    constructor() {
    }

    /**
     * 模拟接口数据
     * @param url 接口地址
     * @param param 接口参数
     */
    static mock: Function = (url: string, param: any) => {
        return null;
    };

    private xhr() {
        if (typeof XMLHttpRequest !== 'undefined') {
            return new XMLHttpRequest();
        }
        var versions = [
            "MSXML2.XmlHttp.6.0",
            "MSXML2.XmlHttp.5.0",
            "MSXML2.XmlHttp.4.0",
            "MSXML2.XmlHttp.3.0",
            "MSXML2.XmlHttp.2.0",
            "Microsoft.XmlHttp"
        ];
        var xhr:any;
        for (var i = 0; i < versions.length; i++) {
            try {
                xhr = new window['ActiveXObject'](versions[i]);
                break;
            } catch (e) {
            }
        }
        return xhr;
    }

    private _status: number = 200;
    public get status() {
        return this._status;
    }
    private _responseText: string = '';
    public get responseText() {
        return this._responseText;
    }
    public get responseJson() {
        return JSON.parse(this._responseText);
    }

    public updaterResponseText(s: string) {
        this._responseText = s;
    }

    private send(url, callback, method, data, async) {
        if (async === undefined) {
            async = true;
        }
        console.log(method, url)
        const self = this;
        var x = this.xhr();
        x.open(method, url, async);
        x.onreadystatechange = function () {

            if (x.readyState == 4) {
                if (x.status == 200) {
                    self._status = x.status;
                    let s = x.responseText;
                    s = s.replace(/\r|\n|\s/ig, '');//以防回车换行空格，不能解析json。
                    self._responseText = s;
                    callback(x.status, x.responseText);
                } else {
                    callback('error', '');
                }

            } else {


            }
        };
        if (method == 'POST') {
            x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        }
        x.send(data);
    }

    public post(url, data, callback, async = true) {
        let res = Ajax.mock(url, data);
        if (res) {
            this._responseText = JSON.stringify(res);
            callback(null, res);
            return;
        }

        var query = [];
        for (var key in data) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        this.send(url, callback, 'POST', query.join('&'), async);
    }

    public get(url, data, callback, async = true) {
        let res = Ajax.mock(url, data);
        if (res) {
            this._responseText = JSON.stringify(res);
            callback(null, res);
            return;
        }

        var query = [];
        for (var key in data) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        this.send(url + (query.length ? '?' + query.join('&') : ''), callback, 'GET', null, async)
    }

}
