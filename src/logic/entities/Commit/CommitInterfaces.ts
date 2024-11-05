import * as dayjs from "dayjs";
import { TBranchID } from "@logic/entities/Branch/BranchInterfaces";
import {
	ILogicEntityBuilder,
	TGetEntityFromObjectFunction,
} from "@logic/common/LogicEntityInterfaces";

export type TCommitID = string;

export interface ICommit {
	id: TCommitID;
	message: string;
	timestamp: dayjs.Dayjs;
	value?: number;
	sourceBranchID: TBranchID;
}

export interface ICommitRawObject {
	id: TCommitID;
	message: string;
	timestamp: string;
	value: number;
	sourceBranchID: TBranchID;
}

export interface ICommitBuilder extends ILogicEntityBuilder {
	getFromObject: TGetEntityFromObjectFunction<ICommitRawObject, ICommit>;
}
