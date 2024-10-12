import { FC } from "react";
import { MainView } from "@pages/main/MainView";
import GlobalStyle from "./styles/GlobalStyle";
import { MainContextProvider } from "@context/MainContext/MainContext";
import { RepoProvider } from "@context/RepoContext/RepoContext";

const App: FC = () => {
	return (
		<>
			<MainContextProvider>
				<RepoProvider>
					<GlobalStyle />
					<MainView />
				</RepoProvider>
			</MainContextProvider>
		</>
	);
};

export default App;
