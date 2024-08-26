import { AddChildBranchButton } from "@components/atoms/buttons/AddChildBranchButton/AddChildBranchButton";
import { IBranchBoxButtonPanelProps } from "@components/molecules/button-panels/BranchBoxButtonPanel/BranchBoxButtonPanelInterfaces";

export const BranchBoxButtonPanel = (props: IBranchBoxButtonPanelProps) => {
	const { branch } = props;
	return (
		<div>
			<AddChildBranchButton sourceBranch={branch} />
		</div>
	);
};
