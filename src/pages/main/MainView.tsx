import { BasicLayout } from "@components/organisms/layouts/BasicLayout/BasicLayout";
import { EmptyPage } from "@pages/common/EmptyPage";
import { useRepo } from "@context/RepoContext/RepoContext";

export const MainView = () => {
	const repo = useRepo();

	if (!repo) {
		return <EmptyPage />;
	}

	return <BasicLayout />;
};
