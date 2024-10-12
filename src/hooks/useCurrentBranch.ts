import { useMainContext } from "@context/MainContext/MainContext";
import { IBranch } from "@logic/entities/Branch/BranchInterfaces";
import { RepoGetters } from "selectors/RepoSelectors";
import { useRepo } from "@context/RepoContext/RepoContext";

export const useCurrentBranch = (): IBranch | null => {
	const repo = useRepo();
	const { currentBranchID } = useMainContext();

	if (!currentBranchID) {
		return null;
	}

	return RepoGetters.getBranchByID(repo, currentBranchID);
};
