import { IRepo } from "@logic/entities/Repo/RepoInterfaces";
import { ERepReducerActionTypes, TRepoAction } from "./repoReducerInterfaces";
import { setRepo } from "./repoReducerConsts";

export const repoReducer = (state: IRepo, action: TRepoAction) => {
	switch (action.type) {
		case ERepReducerActionTypes.SET_REPO:
			return setRepo(state);
		default:
			return state;
	}
};
