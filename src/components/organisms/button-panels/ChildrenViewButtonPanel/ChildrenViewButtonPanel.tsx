import { FC, useState } from "react";
import { IChildrenViewButtonPanelProps } from "@components/organisms/button-panels/ChildrenViewButtonPanel/ChildrenViewButtonPanelInterfaces";
import { SimpleButton } from "@components/atoms/buttons/SimpleButton/SimpleButton";
import { BranchEditForm } from "@components/molecules/forms/BranchEditForm/BranchEditForm";
import {
	IBranch,
	ISourceBranchProps,
} from "@logic/entities/Branch/BranchInterfaces";
import { useMainContext } from "@context/MainContext/MainContext";
import { ERepReducerActionTypes } from "../../../../reducers/repo/repoReducerInterfaces";
import { EBranchConnectionType } from "@logic/entities/Connection/ConnectionInterfaces";
import { Modal } from "@components/atoms/modals/Modal";

export const ChildrenViewButtonPanel: FC<
	IChildrenViewButtonPanelProps
> = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { repoDispatch, currentBranchID } = useMainContext();

	const openModal = () => {
		setIsOpen(true);
	};

	const onClose = () => {
		setIsOpen(false);
	};

	const handleSaveBranch = (branch: IBranch) => {
		repoDispatch({ type: ERepReducerActionTypes.SET_BRANCH, branch });
	};

	const sourceProps: ISourceBranchProps = {
		branchID: currentBranchID,
		connectionType: EBranchConnectionType.PARENT_CHILD,
	};

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<BranchEditForm
					onSave={handleSaveBranch}
					sourceProps={sourceProps}
				/>
			</Modal>
			<SimpleButton onClick={openModal}>Add Branch</SimpleButton>
		</>
	);
};
