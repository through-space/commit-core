import { useMainContext } from "@context/MainContext";
import { useEffect, useState } from "react";
import { EmptyPage } from "@pages/common/EmptyPage";
import { BranchBoxWrapper } from "@components/molecules/cards/BranchBox/BranchBoxStyledComponents";
import { ChildrenViewWrapper } from "@components/organisms/views/ChildrenView/ChildrenViewStyledComponents";
import { BranchBox } from "@components/molecules/cards/BranchBox/BranchBox";

export const ChildrenView = () => {
	const { currentBranchID, repo } = useMainContext();

	if (!currentBranchID) {
		return <EmptyPage />;
	}

	const branch = repo?.getBranchByID(currentBranchID);

	const [children, setChildren] = useState(branch?.getChildren() ?? []);

	useEffect(() => {
		if (branch) {
			setChildren(branch.getChildren());
		}
	}, [currentBranchID]);

	const childrenBoxes = children.map((branch) => {
		return <BranchBox key={`branch_${branch.id}`} branch={branch} />;
	});

	return <ChildrenViewWrapper>{[...childrenBoxes]}</ChildrenViewWrapper>;
};
