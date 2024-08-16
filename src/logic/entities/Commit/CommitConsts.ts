import {
	ICommit,
	ICommitBuilder,
	ICommitBuilderProps,
} from "@logic/entities/Commit/CommitInterfaces";
import dayjs from "dayjs";

export const CommitBuilder: ICommitBuilder = {
	getEntityFromObject: (props: ICommitBuilderProps): ICommit => {
		const { repo, rawObject } = props;
		return {
			...rawObject,
			timestamp: dayjs(rawObject?.timestamp),
			getSourceBranch: () => repo.getBranchByID(rawObject.sourceBranchID),
		};
	},
};
