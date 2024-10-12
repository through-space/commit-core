import {
	IBranch,
	ISourceBranchProps,
	TBranchID,
} from "@logic/entities/Branch/BranchInterfaces";
import {
	ERepReducerActionTypes,
	TRepoAction,
} from "../../../../reducers/repo/repoReducerInterfaces";
import { EBranchConnectionType } from "@logic/entities/Connection/ConnectionInterfaces";
import { ConnectionBuilder } from "@logic/entities/Connection/ConnnectionBuilderConsts";
import { Dispatch } from "react";

export const saveChildBranch = (
	branch: IBranch,
	repoDispatch: Dispatch<TRepoAction>,
	currentBranchID: TBranchID | null,
	sourceProps?: ISourceBranchProps,
) => {
	repoDispatch({ type: ERepReducerActionTypes.SET_BRANCH, branch });

	if (!currentBranchID) {
		repoDispatch({
			type: ERepReducerActionTypes.SET_MAIN_BRANCH,
			branchID: branch.id,
		});
	}

	if (sourceProps) {
		const connectionProps = {
			type: EBranchConnectionType.PARENT_CHILD,
			parentID: sourceProps?.branchID,
			childID: branch.id,
		};

		const newConnection = ConnectionBuilder.createByType(connectionProps);

		repoDispatch({
			type: ERepReducerActionTypes.SET_CONNECTION,
			connection: newConnection,
		});

		repoDispatch({
			type: ERepReducerActionTypes.SET_BRANCH_CONNECTION,
			branchID: branch.id,
			connectionID: newConnection.id,
		});

		if (sourceProps.branchID) {
			repoDispatch({
				type: ERepReducerActionTypes.SET_BRANCH_CONNECTION,
				branchID: sourceProps.branchID,
				connectionID: newConnection.id,
			});
		}
	}
};
