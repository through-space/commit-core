import { FC } from "react";
import { MainView } from "@pages/main/MainView";
import GlobalStyle from "./styles/GlobalStyle";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";

const App: FC = () => {
	return (
		<>
			<GlobalStyle />
			<MainView />
		</>
	);
};

export default App;
