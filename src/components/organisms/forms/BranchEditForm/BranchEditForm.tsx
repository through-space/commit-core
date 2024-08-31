import { IBranchEditFormProps } from "@components/organisms/forms/BranchEditForm/BranchEditFormInterfaces";
import { useMainContext } from "@context/MainContext";
import { useState } from "react";
import { BranchBuilder } from "@logic/entities/Branch/BranchConsts";
import { getUpdatedRepo } from "@components/organisms/forms/BranchEditForm/BranchEditFormConsts";

export const BranchEditForm = (props: IBranchEditFormProps) => {
	const { branch, parent, onClose } = props;
	const [branchName, setBranchName] = useState(branch.name);
	const { repo, updateRepo } = useMainContext();

	const handleBranchNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setBranchName(e.target.value);
	};

	//TODO: export to another file
	//TODO: is it possible that there is no parent?

	const handleSave = () => {
		const newBranch = BranchBuilder.getFromObject({
			rawObject: {
				...branch.dumpToRawObject(),
				name: branchName,
			},
			repo,
		});

		const updatedRepo = getUpdatedRepo({
			branch: newBranch,
			parent,
			repo,
		});

		updateRepo(updatedRepo);
		onClose();
	};

	return (
		<div>
			<input
				type="text"
				value={branchName}
				onChange={handleBranchNameChange}
				autoFocus
			/>
			<button onClick={handleSave}>Save</button>
			<button onClick={onClose}>Close</button>
		</div>
	);
};
