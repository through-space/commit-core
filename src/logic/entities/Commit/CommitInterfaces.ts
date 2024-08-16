import * as dayjs from "dayjs";
import { IBranch, TBranchID } from "@logic/entities/Branch/BranchInterfaces";
import {
	ILogicEntityBuilder,
	ILogicEntityBuilderProps,
} from "@logic/common/LogicEntityInterfaces";
import { IRepo, TConnectionsMap } from "@logic/entities/Repo/RepoInterfaces";

export type TCommitID = string;

export interface ICommit {
	id: TCommitID;
	message: string;
	timestamp: dayjs.Dayjs;
	value: number;
	sourceBranchID: TBranchID;
	getSourceBranch: () => IBranch;
}

export interface ICommitRawObject {
	id: TCommitID;
	message: string;
	timestamp: string;
	value: number;
	sourceBranchID: TBranchID;
}

export interface ICommitBuilder {
	getEntityFromObject: (props: ICommitBuilderProps) => ICommit;
}

export interface ICommitBuilderProps extends ILogicEntityBuilderProps {
	rawObject: ICommitRawObject;
	repo: IRepo;
	sourceBranchID: TBranchID;
}
