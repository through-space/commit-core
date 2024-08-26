import { AddChildBranchButton } from "@components/atoms/buttons/AddChildBranchButton/AddChildBranchButton";
import { FC } from "react";
import { IChildViewButtonPanelProps } from "@components/molecules/button-panels/ChildViewButtonPanel/ChildViewButtonPanelInterfaces";
import { ChildViewButtonPanelWrapper } from "@components/molecules/button-panels/ChildViewButtonPanel/ChildViewButtonPanelStylesComponents";

export const ChildViewButtonPanel: FC<IChildViewButtonPanelProps> = (props) => {
	const { branch } = props;
	return (
		<ChildViewButtonPanelWrapper>
			<AddChildBranchButton sourceBranch={branch} />
		</ChildViewButtonPanelWrapper>
	);
};
