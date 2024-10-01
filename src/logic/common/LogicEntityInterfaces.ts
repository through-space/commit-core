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
	IBranch,
	IBranchRawObject,
	TBranchID,
} from "@logic/entities/Branch/BranchInterfaces";
import { IRepo, IRepoRawObject } from "@logic/entities/Repo/RepoInterfaces";

export type TLogicEntity = IRepo | IBranch | ICommit | IBranchConnection;
export type TLogicEntityRawObject =
	| IRepoRawObject
	| IBranchRawObject
	| ICommitRawObject
	| IBranchConnectionRawObject;

export interface ILogicEntity {
	id: TLogicEntityID;
}

export interface IRawObject {
	id: TLogicEntityID;
}

export type TGetEntityFromObjectFunction<
	RAW_ENTITY extends TLogicEntityRawObject,
	ENTITY extends TLogicEntity,
> = (rawEntity: RAW_ENTITY) => ENTITY;

export interface ILogicEntityBuilder {
	getFromObject: (rawObject: TLogicEntityRawObject) => TLogicEntity;
}

export type TLogicEntityID = TBranchID | TCommitID | TBranchConnectionID;

export type TGeneralEntityMap<
	KEY extends TLogicEntityID,
	ENTITY extends TLogicEntity,
> = Map<KEY, ENTITY>;

export interface ILogicEntityBuilderProps {
	rawObject: IRawObject;
	repo?: IRepo;
}

// export interface IBuildObjectsMapProps {
// 	rawObjects: IRawObject[];
// 	builder: ILogicEntityBuilder;
// 	repo: IRepo;
// }
//
// export interface IInitRawObjectProps {
// 	rawObject: IRawObject;
// 	builder: ILogicEntityBuilder;
// 	repo: IRepo;
// }
//
// export interface IGetAllRepoEntitiesProps<
// 	ENTITY_ID extends TLogicEntityID,
// 	ENTITY extends TLogicEntity,
// 	RAW_OBJECT extends TLogicEntityRawObject,
// > {
// 	rawEntities: RAW_OBJECT[];
// 	entitiesMap: TGeneralEntityMap<ENTITY_ID, ENTITY> | null;
// 	entityBuilder: ILogicEntityBuilder;
// 	repo: IRepo;
// }
//
// export interface IGetRepoEntityByIDProps<
// 	ENTITY_ID extends TLogicEntityID,
// 	ENTITY extends TLogicEntity,
// 	RAW_OBJECT extends TLogicEntityRawObject,
// > {
// 	rawEntities: RAW_OBJECT[];
// 	entitiesMap: TGeneralEntityMap<ENTITY_ID, ENTITY> | null;
// 	entityBuilder: ILogicEntityBuilder;
// 	entityID: ENTITY_ID;
// 	repo: IRepo;
// }
