import { useMainContext } from "@context/MainContext/MainContext";
import React, { FC, useState } from "react";
import { IBranchEditFormProps } from "@components/molecules/forms/BranchEditForm/BranchEditFormInterfaces";
import { RepoGetters } from "selectors/RepoSelectors";
import { emptyBranch } from "@data/templates/emptyBranch";
import { IBranch } from "@logic/entities/Branch/BranchInterfaces";
import { ERepReducerActionTypes } from "../../../../reducers/repo/repoReducerInterfaces";

export const BranchEditForm: FC<IBranchEditFormProps> = ({
	branchID,
	sourceProps,
	onSave,
}) => {
	const { repo, repoDispatch } = useMainContext();
	const [branch, setBranch] = useState<IBranch>(
		branchID
			? (RepoGetters.getBranchByID(repo, branchID) ?? emptyBranch)
			: emptyBranch,
	);

	const handleBranchNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setBranch({ ...branch, name: e.target.value });
	};

	// const branch = branchID
	// 	? RepoGetters.getBranchByID(repo, branchID)
	// 	: emptyBranch;
	//
	// const handleBranchNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	console.log("setting branch name");
	// 	setBranchName(e.target.value);
	// };

	//TODO: export to another file
	//TODO: is it possible that there is no parent?

	const handleSave = () => {
		repoDispatch({ type: ERepReducerActionTypes.SET_BRANCH, branch });
		onSave && onSave(branch);
	};

	return (
		<div>
			<input
				type="text"
				value={branch.name}
				onChange={handleBranchNameChange}
				autoFocus
			/>
			<button onClick={handleSave}>Save</button>
		</div>
	);
};
