import { BasicLayout } from "@components/organisms/layouts/BasicLayout/BasicLayout";
import { RepoBuilder } from "@logic/entities/Repo/RepoConsts";
import { repoExampleObj } from "@data/repoExampleObj";

export const MainView = () => {
	console.log("component loaded: MainView");

	const repo = RepoBuilder.getFromRawObject({
		rawObject: repoExampleObj,
	});
	console.log("repo", repo);
	console.log("branch", repo.getBranchByID("branchID_1"));
	console.log("children", repo.getBranchByID("branchID_1")?.getChildren());
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
