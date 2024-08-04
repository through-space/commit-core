import {IBranch} from "../Branch/Branch";
import {TBranchID} from "../Branch/BranchInterfaces";
import {IRawBranchObject} from "@services/StorageProvider/common/buildBranch";
import {IBranchConnection} from "@logic/entities/Connection/ConnectionInterfaces";

export type TRepoID = string;

export interface IRepo {
	id: TRepoID;
	branches: {
		[branchID: TBranchID]: IBranch
	}
	mainBranchID: TBranchID;

	getBranch: (branchID: TBranchID) => IBranch | null;
	createBranchID: () => TBranchID;
}

export interface IRepoRawObject {
	id: TRepoID;
	branches: IRawBranchObject[];
	connections: IBranchConnection[];
	mainBranchID: string;
}
