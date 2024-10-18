import React, { FC, useState } from "react";
import { IBranchEditFormProps } from "@components/molecules/forms/BranchEditForm/BranchEditFormInterfaces";
import { IBranch } from "@logic/entities/Branch/BranchInterfaces";
import { useRepo, useRepoDispatch } from "@context/RepoContext/RepoContext";
import { ERepReducerActionTypes } from "@reducers/repo/repoReducerInterfaces";
import { getFormBranch } from "@components/molecules/forms/BranchEditForm/BranchEditFormConsts";

export const BranchEditForm: FC<IBranchEditFormProps> = ({
	branchID,
	onSave,
}) => {
	const repo = useRepo();
	const repoDispatch = useRepoDispatch();
	const [branch, setBranch] = useState<IBranch>(
		getFormBranch({ branchID, repo }),
	);

	const handleBranchNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setBranch({ ...branch, name: e.target.value });
	};

	//TODO: export to another file
	//TODO: is it possible that there is no parent?

	const handleSave = (e: React.FormEvent) => {
		e.preventDefault();
		//TODO: add validation
		repoDispatch({ type: ERepReducerActionTypes.SET_BRANCH, branch });

		if (!repo.mainBranchID) {
			repoDispatch({
				type: ERepReducerActionTypes.SET_MAIN_BRANCH,
				branchID: branch.id,
			});
		}

		onSave && onSave(branch);
	};

	const handleRemoveBranch = () => {
		repoDispatch({
			type: ERepReducerActionTypes.REMOVE_BRANCH,
			branchID: branch.id,
		});
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
			<button onClick={handleRemoveBranch}>Remove</button>
		</form>
	);
};
