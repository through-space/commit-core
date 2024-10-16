import React, { FC, useState } from "react";
import { IBranchSettingsButtonProps } from "@components/molecules/buttons/BranchSettingsButton/BranchSettingsButtonInterfaces";
import { SimpleButton } from "@components/atoms/buttons/SimpleButton/SimpleButton";
import { Modal } from "@components/atoms/modals/Modal";
import { BranchEditForm } from "@components/molecules/forms/BranchEditForm/BranchEditForm";

export const BranchSettingsButton: FC<IBranchSettingsButtonProps> = ({
	branchID,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(true);
	};

	const handleSave = () => {
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
