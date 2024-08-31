import { IRepo } from "@logic/entities/Repo/RepoInterfaces";
import { TBranchID } from "@logic/entities/Branch/BranchInterfaces";

export interface IMainContextProps {
	children: any;
}

export interface IMainContext {
	currentBranchID: TBranchID | null;
	setCurrentBranchID: (branchID: TBranchID) => void;
	repo: IRepo;
	updateRepo: (repo: IRepo) => void;
}
