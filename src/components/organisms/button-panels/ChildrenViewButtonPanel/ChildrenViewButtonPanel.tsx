import { FC, useState } from "react";
import { IChildrenViewButtonPanelProps } from "@components/organisms/button-panels/ChildrenViewButtonPanel/ChildrenViewButtonPanelInterfaces";
import { SimpleButton } from "@components/atoms/buttons/SimpleButton/SimpleButton";
import { BranchEditForm } from "@components/molecules/forms/BranchEditForm/BranchEditForm";
import { Modal } from "@components/atoms/modals/Modal";
import { IBranch } from "@logic/entities/Branch/BranchInterfaces";
import { useMainContext } from "@context/MainContext/MainContext";
import { saveChildBranch } from "@components/organisms/button-panels/ChildrenViewButtonPanel/ChildrenViewButtonPanelConsts";
import { useRepoDispatch } from "@context/RepoContext/RepoContext";

export const ChildrenViewButtonPanel: FC<IChildrenViewButtonPanelProps> = ({
	sourceProps,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const { currentBranchID, setCurrentBranchID } = useMainContext();
	const repoDispatch = useRepoDispatch();

	const openModal = () => {
		setIsOpen(true);
	};

	const onClose = () => {
		setIsOpen(false);
	};

	const handleSaveBranch = (branch: IBranch) => {
		saveChildBranch(branch, repoDispatch, currentBranchID, sourceProps);
		setIsOpen(false);
		if (!currentBranchID) {
			setCurrentBranchID(branch.id);
		}
	};

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<BranchEditForm onSave={handleSaveBranch} />
			</Modal>
			<SimpleButton onClick={openModal}>Add Branch</SimpleButton>
		</>
	);
};