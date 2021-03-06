import Config from "./Config";

class Main {
	constructor() {
		//根据IDE设置初始化引擎		
		if (window["Laya3D"]) Laya3D.init(Config.width, Config.height);
		else Laya.init(Config.width, Config.height, Laya["WebGL"]);
		Laya["Physics"] && Laya["Physics"].enable();
		Laya["DebugPanel"] && Laya["DebugPanel"].enable();
		Laya.stage.scaleMode = Config.scaleMode;
		Laya.stage.screenMode = Config.screenMode;
		Laya.stage.alignV = Config.alignV;
		Laya.stage.alignH = Config.alignH;
		//兼容微信不支持加载scene后缀场景
		Laya.URL.exportSceneToJson = Config.exportSceneToJson;

		//打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
		if (Config.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
		if (Config.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
		if (Config.stat) Laya.Stat.show();
		Laya.alertGlobalError(true);

		let path = (<any>window).path || '';
		Laya.URL.customFormat = (url: string) => {
			url = path + url;
			// url = url.replace(/ /ig, '');
			console.log('加载::', url);
			return url;
		}

		//激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
		Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
	}

	onVersionLoaded(): void {
		//激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
		Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
	}

	onConfigLoaded(): void {
		//加载IDE指定的场景
		Config.startScene && Laya.Scene.open("Menu2.scene");
	}
}
//激活启动类
new Main();
