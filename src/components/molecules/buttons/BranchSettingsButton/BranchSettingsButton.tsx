import React, { FC, useState } from "react";
import { IBranchSettingsButtonProps } from "@components/molecules/buttons/BranchSettingsButton/BranchSettingsButtonInterfaces";
import { SimpleButton } from "@components/atoms/buttons/SimpleButton/SimpleButton";
import { Modal } from "@components/atoms/modals/Modal";
import { BranchEditForm } from "@components/molecules/forms/BranchEditForm/BranchEditForm";
import { ERepReducerActionTypes } from "@reducers/repo/repoReducerInterfaces";
import { useRepoDispatch } from "@context/RepoContext/RepoContext";
import { IBranch } from "@logic/entities/Branch/BranchInterfaces";

export const BranchSettingsButton: FC<IBranchSettingsButtonProps> = ({
	branchID,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const repoDispatch = useRepoDispatch();

	const handleClick = () => {
		setIsOpen(true);
	};

	const handleSave = (branch: IBranch) => {
		repoDispatch({ type: ERepReducerActionTypes.SET_BRANCH, branch });
		setIsOpen(false);
	};

	return (
		<SimpleButton onClick={handleClick} isDisabled={false}>
			⚙
			<Modal
				isOpen={isOpen}
				onClose={() => {
					setIsOpen(false);
				}}
			>
				<BranchEditForm branchID={branchID} onSave={handleSave} />
			</Modal>
		</SimpleButton>
	);
};
