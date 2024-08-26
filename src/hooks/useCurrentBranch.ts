import { useMainContext } from "@context/MainContext";

export const useCurrentBranch = () => {
	const { currentBranchID, repo } = useMainContext();

	if (!currentBranchID) {
		return;
	}

	return repo.getBranchByID(currentBranchID);
};
