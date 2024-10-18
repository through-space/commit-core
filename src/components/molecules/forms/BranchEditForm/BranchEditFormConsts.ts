import { IGetFormBranchProps } from "@components/molecules/forms/BranchEditForm/BranchEditFormInterfaces";
import { BranchBuilder } from "@logic/entities/Branch/BranchBuilder";
import { RepoGetters } from "../../../../selectors/RepoSelectors";

export const getFormBranch = (props: IGetFormBranchProps) => {
	const { branchID, repo } = props;

	if (!branchID) {
		return BranchBuilder.getEmptyBranch(repo);
	}

	const branch = RepoGetters.getBranchByID(repo, branchID);

	if (!branch) {
		return BranchBuilder.getEmptyBranch(repo);
	}

	return branch;
};
