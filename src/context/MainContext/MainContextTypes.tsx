import { IRepo } from "@logic/entities/Repo/RepoInterfaces";
import { TBranchID } from "@logic/entities/Branch/BranchInterfaces";
import { Dispatch } from "react";
import { TRepoAction } from "../../reducers/repo/repoReducerInterfaces";

export interface IMainContextProps {
	children: any;
}

export interface IMainContext {
	currentBranchID: TBranchID | null;
	setCurrentBranchID: (branchID: TBranchID) => void;
	repo: IRepo;
	repoDispatch: Dispatch<TRepoAction>;
}
