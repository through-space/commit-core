import {
	IBranch,
	IBranchRawObject,
	TBranchID,
} from "../Branch/BranchInterfaces";
import { IRawBranchObject } from "@services/StorageProvider/common/buildBranch";
import {
	IBranchConnection,
	IBranchConnectionRawObject,
	TBranchConnectionID,
} from "@logic/entities/Connection/ConnectionInterfaces";
import {
	ICommit,
	ICommitRawObject,
	TCommitID,
} from "@logic/entities/Commit/CommitInterfaces";
import {
	ILogicEntity,
	ILogicEntityBuilder,
	ILogicEntityBuilderProps,
} from "@logic/common/LogicEntityInterfaces";

export type TRepoID = string;

export type TBranchesMap = Map<TBranchID, IBranch>;
export type TCommitsMap = Map<TCommitID, ICommit>;
export type TConnectionsMap = Map<TBranchConnectionID, IBranchConnection>;

export type TEntityMap = TBranchesMap | TCommitsMap | TConnectionsMap;

export interface IRepo extends ILogicEntity {
	id: TRepoID;
	branches: TBranchesMap;
	commits: TCommitsMap;
	connections: TConnectionsMap;
	mainBranchID: TBranchID;

	getBranchByID: (branchID: TBranchID) => IBranch;
	getConnectionByID: (connectionID: TBranchConnectionID) => IBranchConnection;
	getCommitByID: (commitID: TCommitID) => ICommit;

	createBranchID: () => TBranchID;
}

export interface IRepoRawObject {
	id: TRepoID;
	branches: IBranchRawObject[];
	connections: IBranchConnectionRawObject[];
	commits: ICommitRawObject[];
	mainBranchID: string;
}

export interface IRepoBuilderProps {
	rawObject: IRepoRawObject;
}

export interface IRepoBuilder {
	getEntityFromObject: (props: IRepoBuilderProps) => IRepo;
}
