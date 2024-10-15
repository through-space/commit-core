import { IStorageProvider } from "@services/StorageProvider/StorageProviderInterfaces";
import { TBranchID } from "@logic/entities/Branch/BranchInterfaces";
import { TRepoAction } from "../../reducers/repo/repoReducerInterfaces";
import { IRepoRawObject, TRepoID } from "@logic/entities/Repo/RepoInterfaces";

export interface IFetchRepoError {
	message: string;
}

export interface IFetchRepoProps {
	storageProvider: IStorageProvider;
	onResolve?: (res: IRepoRawObject) => void;
	onReject?: (error: IFetchRepoError) => void;
}

export interface ILoadRepoProps {
	storageProvider: IStorageProvider;
	dispatchRepo: React.Dispatch<TRepoAction>;
	setCurrentBranchID: (branchID: TBranchID) => void;
	setCurrentRepoID: (repoID: TRepoID) => void;
	onResolve?: (res: IRepoRawObject) => void;
	onReject?: (error: IFetchRepoError) => void;
}
