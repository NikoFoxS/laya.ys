import { Subject } from "../observer/Subject";
import { Model } from "./Model";


export default class Proxy extends Model {
    constructor() {
        super();
    }

    sendNotification(name: any, data?: any) {
        Subject.getInstance().sendNotification(name, data);
    }
}