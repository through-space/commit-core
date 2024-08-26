import { AddChildBranchButton } from "@components/atoms/buttons/AddChildBranchButton/AddChildBranchButton";
import { IBranchBoxButtonPanelProps } from "@components/molecules/button-panels/BranchBoxButtonPanel/BranchBoxButtonPanelInterfaces";
import React from "react";

export const BranchBoxButtonPanel = (props: IBranchBoxButtonPanelProps) => {
	const { branch } = props;
	return (
		<div
			onClick={(e: React.MouseEvent<HTMLDivElement>) => {
				e.stopPropagation();
			}}
		>
			<AddChildBranchButton sourceBranch={branch} />
		</div>
	);
};
