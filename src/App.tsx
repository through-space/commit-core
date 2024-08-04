import * as React from "react";
import { MainView } from "@pages/main/MainView";
import GlobalStyle from "./styles/GlobalStyle";

const App: React.FC = () => {
	console.log("App");
	return (
		<>
			<GlobalStyle />
			<MainView />
		</>
	);
};

export default App;
