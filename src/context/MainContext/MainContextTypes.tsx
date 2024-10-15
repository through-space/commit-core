import { TBranchID } from "@logic/entities/Branch/BranchInterfaces";
import { TRepoID } from "@logic/entities/Repo/RepoInterfaces";

export interface IMainContextProps {
	children: any;
}

export interface IMainContext {
	currentBranchID: TBranchID | null;
	setCurrentBranchID: (branchID: TBranchID) => void;

	currentRepoID: TRepoID | null;
	setCurrentRepoID: (repoID: TRepoID) => void;

	// repo: IRepo;
	// repoDispatch: Dispatch<TRepoAction>;
}
