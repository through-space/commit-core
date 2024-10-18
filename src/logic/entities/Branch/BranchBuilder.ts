import {
	IBranch,
	IBranchBuilder,
	IBranchRawObject,
	TBranchID,
} from "@logic/entities/Branch/BranchInterfaces";
import { emptyBranch } from "@data/templates/emptyBranch";
import dayjs from "dayjs";
import { TGetEntityFromObjectFunction } from "@logic/common/LogicEntityInterfaces";
import { IRepo } from "@logic/entities/Repo/RepoInterfaces";
import { RepoGetters } from "@selectors/RepoSelectors";

const createBranchID = (): TBranchID => {
	return (
		"branchID_" + Math.ceil(Math.random() * 1000000) + "_" + dayjs().unix()
	);
};

const getBranchFromObject: TGetEntityFromObjectFunction<
	IBranchRawObject,
	IBranch
> = (rawBranch) => {
	return {
		id: rawBranch.id,
		name: rawBranch.name,
		connectionIDs: rawBranch.connectionIDs,
	};
};

const getEmptyBranch = (repo: IRepo): IBranch => {
	let id: TBranchID;
	do {
		id = createBranchID();
	} while (RepoGetters.getBranchByID(repo, id));

	return {
		...emptyBranch,
		id,
	};
};

const dumpBranchToRawObject = (branch: IBranch): IBranchRawObject => {
	return {
		id: branch.id,
		name: branch.name,
		connectionIDs: branch.connectionIDs,
	};
};

export const BranchBuilder: IBranchBuilder = {
	getFromObject: getBranchFromObject,
	getEmptyBranch,
	dumpToRawObject: dumpBranchToRawObject,
};
