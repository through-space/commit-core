import { IBranchBoxButtonPanelProps } from "@components/organisms/button-panels/BranchBoxButtonPanel/BranchBoxButtonPanelInterfaces";
import React from "react";

export const BranchBoxButtonPanel = (props: IBranchBoxButtonPanelProps) => {
	const { branch } = props;

	return (
		<div
			onClick={(e: React.MouseEvent<HTMLDivElement>) => {
				e.stopPropagation();
			}}
		>
			{/*<RemoveBranchButton branch={branch} />*/}
		</div>
	);
};
