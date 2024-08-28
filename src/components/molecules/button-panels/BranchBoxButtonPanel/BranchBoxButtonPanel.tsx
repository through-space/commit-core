import { IBranchBoxButtonPanelProps } from "@components/molecules/button-panels/BranchBoxButtonPanel/BranchBoxButtonPanelInterfaces";
import React from "react";
import { RemoveBranchButton } from "@components/atoms/buttons/RemoveBranchButton/RemoveBranchButton";

export const BranchBoxButtonPanel = (props: IBranchBoxButtonPanelProps) => {
	const { branch } = props;

	return (
		<div
			onClick={(e: React.MouseEvent<HTMLDivElement>) => {
				e.stopPropagation();
			}}
		>
			<RemoveBranchButton branch={branch} />
		</div>
	);
};
