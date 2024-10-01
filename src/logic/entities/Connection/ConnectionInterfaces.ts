import { TBranchID } from "@logic/entities/Branch/BranchInterfaces";
import {
	ILogicEntityBuilder,
	ILogicEntityBuilderProps,
} from "@logic/common/LogicEntityInterfaces";
import { IRepo } from "@logic/entities/Repo/RepoInterfaces";

export enum EBranchConnectionType {
	PARENT_CHILD = "PARENT_CHILD",
}

export enum EBranchConnectionMemberRole {
	PARENT = "PARENT",
	CHILD = "CHILD",
}

export interface IBranchConnectionMember {
	role: EBranchConnectionMemberRole;
	branchID: TBranchID;
}

export interface IBranchConnectionRawMember {
	role: EBranchConnectionMemberRole;
	branchID: TBranchID;
}

export type TBranchConnectionID = string;

export interface IBranchConnection {
	id: TBranchConnectionID;
	type: EBranchConnectionType;
	members: IBranchConnectionMember[];
}

export interface IBranchConnectionRawObject {
	id: TBranchConnectionID;
	type: EBranchConnectionType;
	members: IBranchConnectionRawMember[];
}

export interface IBranchConnectionBuilderProps
	extends ILogicEntityBuilderProps {
	rawObject: IBranchConnectionRawObject;
	repo: IRepo;
}

export interface IBranchConnectionBuilder extends ILogicEntityBuilder {
	getFromObject: (rawEntity: IBranchConnectionRawObject) => IBranchConnection;
}
