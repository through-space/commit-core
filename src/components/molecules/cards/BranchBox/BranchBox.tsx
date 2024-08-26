import { IBranchBoxProps } from "@components/molecules/cards/BranchBox/BranchBoxInterfaces";
import { BranchBoxWrapper } from "@components/molecules/cards/BranchBox/BranchBoxStyledComponents";
import { BranchBoxButtonPanel } from "@components/molecules/button-panels/BranchBoxButtonPanel/BranchBoxButtonPanel";

export const BranchBox = (props: IBranchBoxProps) => {
	const { branch } = props;

	return (
		<BranchBoxWrapper>
			<div>{branch.name}</div>
			<BranchBoxButtonPanel branch={branch} />
		</BranchBoxWrapper>
	);
};
