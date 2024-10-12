import { IRepo } from "@logic/entities/Repo/RepoInterfaces";
import { ERepReducerActionTypes, TRepoAction } from "./repoReducerInterfaces";
import {
	setBranch,
	setBranchConnection,
	setConnection,
	setMainBranch,
	setRepo,
} from "./repoReducerConsts";

export const repoReducer = (state: IRepo, action: TRepoAction) => {
	switch (action.type) {
		case ERepReducerActionTypes.SET_REPO:
			return setRepo(action.repo);
		case ERepReducerActionTypes.SET_BRANCH:
			return setBranch(state, action.branch);
		case ERepReducerActionTypes.SET_CONNECTION:
			return setConnection(state, action.connection);
		case ERepReducerActionTypes.SET_BRANCH_CONNECTION:
			return setBranchConnection(
				state,
				action.branchID,
				action.connectionID,
			);
		case ERepReducerActionTypes.SET_MAIN_BRANCH:
			return setMainBranch(state, action.branchID);
		default:
			return state;
	}
};
