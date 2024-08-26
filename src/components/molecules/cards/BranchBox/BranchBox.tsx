import { IBranchBoxProps } from "@components/molecules/cards/BranchBox/BranchBoxInterfaces";
import { BranchBoxWrapper } from "@components/molecules/cards/BranchBox/BranchBoxStyledComponents";
import { BranchBoxButtonPanel } from "@components/molecules/button-panels/BranchBoxButtonPanel/BranchBoxButtonPanel";
import React from "react";
import { useMainContext } from "@context/MainContext";

export const BranchBox = (props: IBranchBoxProps) => {
	const { branch } = props;
	const { setCurrentBranchID } = useMainContext();

	return (
		<BranchBoxWrapper onClick={() => setCurrentBranchID(branch.id)}>
			<div>{branch.name}</div>
			<BranchBoxButtonPanel branch={branch} />
		</BranchBoxWrapper>
	);
};
