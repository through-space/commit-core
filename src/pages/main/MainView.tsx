import { useMainContext } from "context/MainContext";
import { BasicLayout } from "@components/organisms/layouts/BasicLayout/BasicLayout";
import { useBranchPaletteService } from "../../hooks/useBranchPaletteService";

export const MainView = () => {
	const BranchPaletteService = useBranchPaletteService({});

	console.log("BranchPaletteService in MainView", BranchPaletteService);

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
