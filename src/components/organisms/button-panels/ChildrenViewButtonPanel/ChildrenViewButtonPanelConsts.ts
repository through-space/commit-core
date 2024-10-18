import {
	IBranch,
	ISourceBranchProps,
	TBranchID,
} from "@logic/entities/Branch/BranchInterfaces";
import {
	ERepReducerActionTypes,
	TRepoAction,
} from "@reducers/repo/repoReducerInterfaces";
import { EBranchConnectionType } from "@logic/entities/Connection/ConnectionInterfaces";
import { ConnectionBuilder } from "@logic/entities/Connection/ConnnectionBuilderConsts";
import { Dispatch } from "react";
import { ISetNewChildConnectionProps } from "@components/organisms/button-panels/ChildrenViewButtonPanel/ChildrenViewButtonPanelInterfaces";

export const setNewChildConnection = (
	props: ISetNewChildConnectionProps,
): void => {
	const { sourceProps, childBranch, repoDispatch } = props;

	const newConnectionProps = {
		type: EBranchConnectionType.PARENT_CHILD,
		parentID: sourceProps?.branchID,
		childID: childBranch.id,
	};

	const newConnection = ConnectionBuilder.createByType(newConnectionProps);

	repoDispatch({
		type: ERepReducerActionTypes.SET_CONNECTION,
		connection: newConnection,
	});

	repoDispatch({
		type: ERepReducerActionTypes.SET_BRANCH_CONNECTION,
		branchID: childBranch.id,
		connectionID: newConnection.id,
	});

	if (sourceProps.branchID) {
		repoDispatch({
			type: ERepReducerActionTypes.SET_BRANCH_CONNECTION,
			branchID: sourceProps.branchID,
			connectionID: newConnection.id,
		});
	}
};

export const saveChildBranch = (
	branch: IBranch,
	repoDispatch: Dispatch<TRepoAction>,
	sourceProps?: ISourceBranchProps,
) => {
	if (sourceProps) {
		setNewChildConnection({
			sourceProps,
			childBranch: branch,
			repoDispatch,
		});
	}
};
