import React from "react";
import AppTheme from "./AppTheme";
import AppRouteNavigator from "./AppNavigator";

function App(): JSX.Element {
	return (
		<AppTheme>
			<AppRouteNavigator />
		</AppTheme>
	);
}

export default App;
