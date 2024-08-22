import { FC } from "react";
import { MainView } from "@pages/main/MainView";
import GlobalStyle from "./styles/GlobalStyle";
import { MainContextProvider } from "./context/MainContext";

const App: FC = () => {
	return (
		<>
			<MainContextProvider>
				<GlobalStyle />
				<MainView />
			</MainContextProvider>
		</>
	);
};

export default App;
