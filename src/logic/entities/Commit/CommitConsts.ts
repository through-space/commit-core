import {
	ICommitBuilder,
	ICommitRawObject,
} from "@logic/entities/Commit/CommitInterfaces";
import dayjs from "dayjs";

export const CommitBuilder: ICommitBuilder = {
	getFromObject: (rawEntity: ICommitRawObject) => {
		return {
			...rawEntity,
			timestamp: dayjs(rawEntity?.timestamp),
		};
	},
};
