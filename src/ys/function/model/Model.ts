export class Model {
    private static _data: any;
    constructor() {
        if (!Model._data) {
            Model._data = {};
        }
    }

    setData(key: any, data: any) {
        Model._data[key] = data;
    }

    getData(key: any) {
        Model._data[key];
    }
}



