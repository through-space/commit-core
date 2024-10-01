import { IRepo } from "@logic/entities/Repo/RepoInterfaces";
import { IBranch } from "@logic/entities/Branch/BranchInterfaces";

export enum ERepReducerActionTypes {
	SET_REPO = "SET_REPO",
	SET_BRANCH = "SET_BRANCH",
}

export interface ISetRepoAction {
	type: ERepReducerActionTypes.SET_REPO;
	repo: IRepo;
}

export interface ISetBranchAction {
	type: ERepReducerActionTypes.SET_BRANCH;
	branch: IBranch;
}

export type TRepoAction = ISetRepoAction | ISetBranchAction;
