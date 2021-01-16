/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import SC_Close from "./ys/script/SC_Close"
import SC_ClickNotify from "./ys/script/SC_ClickNotify"
import SC_SceneHeight from "./ys/script/SC_SceneHeight"
import SC_ClickOpenView from "./ys/script/SC_ClickOpenView"
/*
* 游戏初始化配置;
*/
export default class GameConfig{
    static width:number=750;
    static height:number=1624;
    static scaleMode:string="fixedwidth";
    static screenMode:string="vertical";
    static alignV:string="top";
    static alignH:string="left";
    static startScene:any="Menu.scene";
    static sceneRoot:string="";
    static debug:boolean=false;
    static stat:boolean=true;
    static physicsDebug:boolean=false;
    static exportSceneToJson:boolean=true;
    constructor(){}
    static init(){
        var reg: Function = Laya.ClassUtils.regClass;
        reg("ys/script/SC_Close.ts",SC_Close);
        reg("ys/script/SC_ClickNotify.ts",SC_ClickNotify);
        reg("ys/script/SC_SceneHeight.ts",SC_SceneHeight);
        reg("ys/script/SC_ClickOpenView.ts",SC_ClickOpenView);
    }
}
GameConfig.init();