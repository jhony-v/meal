export namespace MRoutes {
	interface RouterCreatorData {
		path: string;
		component?: any;
		routes?: RouterCreator;
	}

	type RouterCreator = {
		[key in ?ALL_ROUTES_NAME]?: RouterCreatorData;
	};

	type HOME_ROUTES_NAME = "HOME" | "SEARCH";
	type PROFILE_ROUTES_NAME = "PROFILE" | "DEFAULT" | "ABOUT" | "ASSETS";
	type SETTING_ROUTES_NAME = "SETTING";
	type ALL_ROUTES_NAME =
		| HOME_ROUTES_NAME
		| PROFILE_ROUTES_NAME
		| CONFIGURATION_ROUTES_NAME;
}
