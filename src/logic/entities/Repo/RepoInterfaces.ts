import {
	IBranch,
	IBranchRawObject,
	TBranchID,
} from "../Branch/BranchInterfaces";
import {
	IBranchConnection,
	IBranchConnectionRawObject,
	TBranchConnectionID,
} from "@logic/entities/Connection/ConnectionInterfaces";
import { ICommitRawObject } from "@logic/entities/Commit/CommitInterfaces";
import { ILogicEntity } from "@logic/common/LogicEntityInterfaces";

export type TRepoID = string;

export interface IRepo extends ILogicEntity {
	id: TRepoID;
	// branches: TBranchesMap;
	raw: IRepoRawObject;

	// getConnectionByID: (
	// 	connectionID: TBranchConnectionID,
	// ) => IBranchConnection | undefined;
	getBranchByID: (branchID: TBranchID) => IBranch | undefined;
	getConnectionByID: (
		connectionID: TBranchConnectionID,
	) => IBranchConnection | undefined;
	// commits: TCommitsMap;
	// connections: TConnectionsMap;
	//
	mainBranchID?: TBranchID;
	// mainBranch: IBranch;

	// getConnectionByID: (
	// 	connectionID: TBranchConnectionID,
	// ) => IBranchConnection | undefined;
	// getCommitByID: (commitID: TCommitID) => ICommit | undefined;
	//
	// setBranch: (branch: IBranch) => void;
	// setConnection: (connection: IBranchConnection) => void;
	// setCommit: (commit: ICommit) => void;

	// createBranchID: () => TBranchID;

	setMainBranchID: (branchID: TBranchID) => void;
	dumpToRawObject: () => IRepoRawObject;
}

export interface IRepoRawObject {
	id: TRepoID;
	branches: IBranchRawObject[];
	connections: IBranchConnectionRawObject[];
	commits: ICommitRawObject[];
	mainBranchID?: TBranchID;
}

export interface IRepoBuilderProps {
	rawObject: IRepoRawObject;
}

export interface IRepoBuilder {
	getFromRawObject: (props: IRepoBuilderProps) => IRepo;
	dumpToRawObject?: (repo: IRepo) => IRepoRawObject;
}
