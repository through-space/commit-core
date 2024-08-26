import { IAddChildBranchButtonProps } from "@components/atoms/buttons/AddChildBranchButton/AddChildBranchButtonInterfaces";
import { Modal } from "@components/atoms/modals/Modal";
import { useState } from "react";
import { BranchEditForm } from "@components/organisms/forms/BranchEditForm/BranchEditForm";
import { BranchBuilder } from "@logic/entities/Branch/BranchConsts";
import { useMainContext } from "@context/MainContext";

export const AddChildBranchButton = (props: IAddChildBranchButtonProps) => {
	const { sourceBranch } = props;
	const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
	const { repo } = useMainContext();

	const openBranchModal = () => {
		setIsSettingsModalOpen(true);
		console.log("Add child branch to", sourceBranch);
	};

	const onSettingsModalClose = () => {
		setIsSettingsModalOpen(false);
	};

	const emptyBranch = BranchBuilder.getFromObject({
		repo,
		rawObject: BranchBuilder.getEmptyBranch(repo),
	});

	return (
		<>
			<button onClick={openBranchModal}>Add Branch</button>
			<Modal isOpen={isSettingsModalOpen} onClose={onSettingsModalClose}>
				<BranchEditForm
					branch={emptyBranch}
					parent={sourceBranch}
					onClose={onSettingsModalClose}
				/>
			</Modal>
		</>
	);
};
