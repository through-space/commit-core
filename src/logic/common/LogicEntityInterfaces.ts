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
import { IBranch, TBranchID } from "@logic/entities/Branch/BranchInterfaces";
import { IRepo } from "@logic/entities/Repo/RepoInterfaces";

export type TRawObject =
	| IRawBranchObject
	| IBranchConnectionRawObject
	| ICommitRawObject;

export type TLogicEntity = IRepo | IBranch | ICommit | IBranchConnection;

export interface ILogicEntity {
	id: TLogicEntityID;
}

export interface ILogicEntityBuilder {
	getEntityFromObject: (props: ILogicEntityBuilderProps) => ILogicEntity;
}

export type TLogicEntityID = TBranchID | TCommitID | TBranchConnectionID;

export interface ILogicEntityBuilderProps {
	rawObject: TRawObject;
	repo?: IRepo;
}

export interface IBuildObjectsMapProps {
	rawObjects: TRawObject[];
	builder: ILogicEntityBuilder;
	repo: IRepo;
}

export interface IInitRawObjectProps {
	rawObject: TRawObject;
	builder: ILogicEntityBuilder;
	repo: IRepo;
}

export interface IGetEntityByIDProps {
	id: TLogicEntityID;
	entityMap: Map<TLogicEntityID, TLogicEntity>;
}
