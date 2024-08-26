import { IBranchBoxButtonPanelProps } from "@components/molecules/button-panels/BranchBoxButtonPanel/BranchBoxButtonPanelInterfaces";
import React from "react";

export const BranchBoxButtonPanel = (props: IBranchBoxButtonPanelProps) => {
	return (
		<div
			onClick={(e: React.MouseEvent<HTMLDivElement>) => {
				e.stopPropagation();
			}}
		></div>
	);
};
