import { useMainContext } from "@context/MainContext/MainContext";
import { EmptyPage } from "@pages/common/EmptyPage";
import {
	ChildrenListWrapper,
	ChildrenViewWrapper,
} from "./ChildrenViewStyledComponents";
import { BranchBox } from "@components/molecules/cards/BranchBox/BranchBox";
import { RepoGetters } from "../../selectors/RepoSelectors";
import {
	EBranchConnectionMemberRole,
	EBranchConnectionType,
} from "@logic/entities/Connection/ConnectionInterfaces";
import { ChildrenViewButtonPanel } from "@components/organisms/button-panels/ChildrenViewButtonPanel/ChildrenViewButtonPanel";

export const ChildrenView = () => {
	const { repo, currentBranchID } = useMainContext();

	if (!currentBranchID) {
		//TODO: add button to create new branch
		return <EmptyPage />;
	}
	const branch = RepoGetters.getBranchByID(repo, currentBranchID);

	if (!branch) {
		return <EmptyPage />;
	}

	const children = RepoGetters.getConnectedBranches(
		repo,
		branch.id,
		EBranchConnectionType.PARENT_CHILD,
		EBranchConnectionMemberRole.CHILD,
	);

	const ChildrenList = () => {
		return (
			<ChildrenListWrapper>
				{children.map((branch) => {
					return (
						<BranchBox
							key={`branch_${branch.id}`}
							branch={branch}
						/>
					);
				})}
			</ChildrenListWrapper>
		);
	};

	return (
		<ChildrenViewWrapper>
			<ChildrenViewButtonPanel />
			<ChildrenList />
		</ChildrenViewWrapper>
	);
};
