import {TBranchID} from "@logic/entities/Branch/BranchInterfaces";

export enum EBranchConnectionType {
	PARENT = "PARENT",
	CHILD = "CHILD",
}

export interface IBranchConnection {
	branch: TBranchID;
	type: EBranchConnectionType;
}

export type IBranchConnectionRawObject = IBranchConnection;
