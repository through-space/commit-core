import {
	ICommit,
	ICommitBuilder,
	ICommitBuilderProps,
} from "@logic/entities/Commit/CommitInterfaces";
import dayjs from "dayjs";
import {
	IBranch,
	IBranchBuilder,
	IBranchBuilderProps,
} from "@logic/entities/Branch/BranchInterfaces";
import { getBranchFromObject } from "@logic/entities/Branch/BranchMethods";

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

export const getCommitFromObject = (props: ICommitBuilderProps): ICommit => {
	const { rawObject } = props;
	// const connectionIDs = rawObject.connectionIDs;

	return {
		id: rawObject.id,
		name: rawObject.name,
		// paletteType: rawObject.palette,
		// contributionValue: rawObject.contributionValue,
		// connections: [],
	};
};

export const CommitBuilder: ICommitBuilder = {
	getFromObject: getBranchFromObject,
};
