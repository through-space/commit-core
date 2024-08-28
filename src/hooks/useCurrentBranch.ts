import { useMainContext } from "@context/MainContext";
import { IBranch } from "@logic/entities/Branch/BranchInterfaces";

export const useCurrentBranch = (): IBranch | undefined => {
	const { currentBranchID, repo } = useMainContext();

	if (!currentBranchID) {
		return;
	}

	return repo.getBranchByID(currentBranchID);
};
