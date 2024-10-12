import { BasicLayout } from "@components/organisms/layouts/BasicLayout/BasicLayout";
import { useMainContext } from "@context/MainContext/MainContext";
import { EmptyPage } from "@pages/common/EmptyPage";

export const MainView = () => {
	console.log("component loaded: MainView");
	const { repo } = useMainContext();

	if (!repo) {
		return <EmptyPage />;
	}

	return <BasicLayout />;
};
