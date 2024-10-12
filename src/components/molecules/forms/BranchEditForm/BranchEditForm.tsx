import { useMainContext } from "@context/MainContext/MainContext";
import React, { FC, FormEventHandler, useState } from "react";
import { IBranchEditFormProps } from "@components/molecules/forms/BranchEditForm/BranchEditFormInterfaces";
import { RepoGetters } from "selectors/RepoSelectors";
import { IBranch } from "@logic/entities/Branch/BranchInterfaces";
import { getEmptyBranch } from "@logic/entities/Branch/BranchMethods";
import { useRepo } from "@context/RepoContext/RepoContext";

export const BranchEditForm: FC<IBranchEditFormProps> = ({
	branchID,
	onSave,
}) => {
	const repo = useRepo();
	const [branch, setBranch] = useState<IBranch>(
		branchID
			? (RepoGetters.getBranchByID(repo, branchID) ??
					getEmptyBranch(repo))
			: getEmptyBranch(repo),
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

	const handleSave = (e: React.FormEvent) => {
		e.preventDefault();
		onSave && onSave(branch);
	};

	return (
		<form onSubmit={handleSave}>
			<input
				type="text"
				value={branch.name}
				onChange={handleBranchNameChange}
				autoFocus
			/>
			<button onClick={handleSave}>Save</button>
		</form>
	);
};
