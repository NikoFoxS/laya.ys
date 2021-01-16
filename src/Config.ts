import SC_SceneHeight from "./script/common/SC_SceneHeight"
/*
* 游戏初始化配置; 单独列出来，方便手动配置脚本. 不然IDE只会把用到的脚本，打包。
* 手动添加的好处是，把项目相关的脚本，都打包。方便在后续不发布版本，直接修改json配置来修改项目功能。
* 特别是针对，淘宝互动创意和微信小游戏，发布要审核。紧急情况下，可以通过json配置的修改项目。
*/
export default class Config{
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
        reg("script/common/SC_SceneHeight.ts",SC_SceneHeight);
    }
}
Config.init();