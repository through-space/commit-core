import { IRepo } from "@logic/entities/Repo/RepoInterfaces";
import { IBranch, TBranchID } from "@logic/entities/Branch/BranchInterfaces";
import {
	IBranchConnection,
	TBranchConnectionID,
} from "@logic/entities/Connection/ConnectionInterfaces";

export enum ERepReducerActionTypes {
	SET_REPO = "SET_REPO",
	SET_BRANCH = "SET_BRANCH",
	SET_MAIN_BRANCH = "SET_MAIN_BRANCH",
	SET_CONNECTION = "SET_CONNECTION",
	SET_BRANCH_CONNECTION = "SET_BRANCH_CONNECTION",
	REMOVE_BRANCH = "REMOVE_BRANCH",
}

export interface ISetRepoAction {
	type: ERepReducerActionTypes.SET_REPO;
	repo: IRepo;
}

export interface ISetBranchAction {
	type: ERepReducerActionTypes.SET_BRANCH;
	branch: IBranch;
}

export interface ISetMainBranchAction {
	type: ERepReducerActionTypes.SET_MAIN_BRANCH;
	branchID: TBranchID;
}

export interface ISetConnectionAction {
	type: ERepReducerActionTypes.SET_CONNECTION;
	connection: IBranchConnection;
}

export interface ISetBranchConnectionAction {
	type: ERepReducerActionTypes.SET_BRANCH_CONNECTION;
	branchID: TBranchID;
	connectionID: TBranchConnectionID;
}

export interface IRemoveBranchAction {
	type: ERepReducerActionTypes.REMOVE_BRANCH;
	branchID: TBranchID;
}

export type TRepoAction =
	| ISetRepoAction
	| ISetBranchAction
	| ISetMainBranchAction
	| ISetConnectionAction
	| ISetBranchConnectionAction
	| IRemoveBranchAction;
