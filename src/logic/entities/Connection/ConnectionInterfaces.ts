import { TBranchID } from "@logic/entities/Branch/BranchInterfaces";

export enum EBranchConnectionType {
	PARENT = "PARENT",
	CHILD = "CHILD",
}

export type TBranchConnectionID = string;

export interface IBranchConnection {
	id: TBranchConnectionID;
	branch: TBranchID;
	type: EBranchConnectionType;
}

export type IBranchConnectionRawObject = IBranchConnection;
