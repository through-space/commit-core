import { useMainContext } from "@context/MainContext/MainContext";
import { IBranch } from "@logic/entities/Branch/BranchInterfaces";
import { RepoGetters } from "selectors/RepoSelectors";

export const useCurrentBranch = (): IBranch | null => {
	const { currentBranchID, repo } = useMainContext();

	if (!currentBranchID) {
		return null;
	}

	return RepoGetters.getBranchByID(repo, currentBranchID);
};
