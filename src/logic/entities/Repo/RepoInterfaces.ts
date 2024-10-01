import {
	IBranch,
	IBranchRawObject,
	TBranchID,
} from "../Branch/BranchInterfaces";
import {
	IBranchConnection,
	IBranchConnectionRawObject,
} from "@logic/entities/Connection/ConnectionInterfaces";
import {
	ICommit,
	ICommitRawObject,
} from "@logic/entities/Commit/CommitInterfaces";
import { ILogicEntity } from "@logic/common/LogicEntityInterfaces";

export type TRepoID = string;

export interface IRepo extends ILogicEntity {
	id: TRepoID;
	mainBranchID: TBranchID;
	branches: IBranch[];
	connections: IBranchConnection[];
	commits: ICommit[];
}

export interface IRepoRawObject {
	id: TRepoID;
	branches: IBranchRawObject[];
	connections: IBranchConnectionRawObject[];
	commits: ICommitRawObject[];
	mainBranchID: TBranchID;
}

export interface IRepoBuilderProps {
	rawObject: IRepoRawObject;
}

export interface IRepoBuilder {
	getFromRawObject: (rawObject: IRepoRawObject) => IRepo;
	dumpToRawObject: (repo: IRepo) => IRepoRawObject;
}
