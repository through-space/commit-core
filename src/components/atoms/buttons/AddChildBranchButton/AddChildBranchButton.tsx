import { IAddChildBranchButtonProps } from "@components/atoms/buttons/AddChildBranchButton/AddChildBranchButtonInterfaces";
import { Modal } from "@components/atoms/modals/Modal";
import { useState } from "react";

export const AddChildBranchButton = (props: IAddChildBranchButtonProps) => {
	const { sourceBranch } = props;
	const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

	const openBranchModal = () => {
		setIsSettingsModalOpen(true);
		console.log("Add child branch to", sourceBranch);
	};

	const onSettingsModalClose = () => {
		setIsSettingsModalOpen(false);
	};

	return (
		<>
			<button onClick={openBranchModal}>Add Branch</button>
			<Modal isOpen={isSettingsModalOpen} onClose={onSettingsModalClose}>
				<div>asdfasdf</div>
			</Modal>
		</>
	);
};
