import { IBranchBoxProps } from "@components/molecules/cards/BranchBox/BranchBoxInterfaces";
import { BranchBoxWrapper } from "@components/molecules/cards/BranchBox/BranchBoxStyledComponents";
import { BranchBoxButtonPanel } from "@components/organisms/button-panels/BranchBoxButtonPanel/BranchBoxButtonPanel";
import { useMainContext } from "@context/MainContext/MainContext";
import { BranchSettingsButton } from "@components/molecules/buttons/BranchSettingsButton/BranchSettingsButton";

export const BranchBox = (props: IBranchBoxProps) => {
	const { branch } = props;
	const { setCurrentBranchID } = useMainContext();

	return (
		<BranchBoxWrapper onClick={() => setCurrentBranchID(branch.id)}>
			<div>{branch.name}</div>
			<BranchSettingsButton branchID={branch.id} />
			<BranchBoxButtonPanel branch={branch} />
		</BranchBoxWrapper>
	);
};
