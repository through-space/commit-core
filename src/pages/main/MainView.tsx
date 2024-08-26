import { BasicLayout } from "@components/organisms/layouts/BasicLayout/BasicLayout";
import { useMainContext } from "../../context/MainContext";
import { EmptyPage } from "@pages/common/EmptyPage";

export const MainView = () => {
	console.log("component loaded: MainView");
	// const repo = RepoBuilder.getFromRawObject({
	const { repo, updateRepo } = useMainContext();
	// 	rawObject: repoExampleObj,
	// });
	if (!repo) {
		return <EmptyPage />;
	}

	console.log("repo", repo);

	console.log("branch", repo.getBranchByID("branchID_1"));
	console.log("children", repo.getBranchByID("branchID_1")?.getChildren());

	setTimeout(() => {
		repo.setMainBranchID("branchID_1");
		updateRepo(repo);
	}, 5000);
	//
	// const storage = StorageProviderFactory.getStorageProvider({
	// 	type: EStorageProviderType.LOCAL_STORAGE,
	// });
	//
	// storage.saveRepo(repo);
	// const BranchPaletteService = useBranchPaletteService({});

	// console.log("BranchPaletteService in MainView", BranchPaletteService);

	// const { obsidianFilesProvider, repo, currentBranchID } = useMainContext();

	// if (currentBranchID) {
	// 	console.log(
	// 		"cur branch: asdfasdfsadfs",
	// 		repo?.getBranch(currentBranchID),
	// 	);
	// }

	// if (!obsidianFilesProvider) {
	// 	return null;
	// }
	//
	// console.log("repo", repo);

	return <BasicLayout />;
};
