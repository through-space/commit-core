import { useMainContext } from "@context/MainContext";
import { useEffect, useState } from "react";
import { EmptyPage } from "@pages/common/EmptyPage";
import {
	ChildrenListWrapper,
	ChildrenViewWrapper,
} from "@components/organisms/views/ChildrenView/ChildrenViewStyledComponents";
import { BranchBox } from "@components/molecules/cards/BranchBox/BranchBox";
import { IBranch } from "@logic/entities/Branch/BranchInterfaces";
import { useCurrentBranch } from "@hooks/useCurrentBranch";
import { ChildViewButtonPanel } from "@components/molecules/button-panels/ChildViewButtonPanel/ChildViewButtonPanel";

export const ChildrenView = () => {
	const { repo } = useMainContext();
	const [children, setChildren] = useState<IBranch[]>([]);
	const branch = useCurrentBranch();

	useEffect(() => {
		if (!branch) {
			return;
		}

		setChildren(branch.getChildren());
	}, [repo, branch]);

	if (!branch) {
		return <EmptyPage />;
	}

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
			<ChildViewButtonPanel branch={branch} />
			<ChildrenList />
		</ChildrenViewWrapper>
	);
};
